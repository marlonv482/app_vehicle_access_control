import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { VehicleModel } from 'src/app/core/models/vehicle.model';
import { environment } from 'src/environments/environment';@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private readonly URL=environment.api;
  private vehicleSelected!: VehicleModel;
constructor(private http:HttpClient,private cookie:CookieService){

}
  $addVehicleModal=new EventEmitter<any>();
  $editVehicleModal=new EventEmitter<any>();
  $vehicleSelected=new EventEmitter<VehicleModel>;

  getAllVehicles():Observable<any>{
    const token=this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.URL}/vehicles/getAllVehicles`,{headers}).pipe(
      map((dataRow:any)=>{
        return dataRow.vehicles
      })
    );
  }
  
  getVehicleById(id:number):Observable<any>{
    const token=this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.URL}/vehicles/getVehicleById/${id}`,{headers}).pipe(
      map((dataRow:any)=>{
        return dataRow.vehicles
      }),
      catchError((err)=>{
        console.log(err)
        return of([])
      })
    );
  }
  addVehicle(vehicle:any):Observable<any>{
    const token=this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.URL}/vehicles/addVehicle`,vehicle,{headers}).pipe(
      map((dataRow:any)=>{
        return dataRow.vehicle
      }),
      catchError((err)=>{
        console.log(err)
        return of([])
      })
    );
  }
  setVehicleSelected(vehicle:VehicleModel){
    this.vehicleSelected=vehicle;
   
  }
  getVehicleSelected(){
    return this.vehicleSelected;
  }
}
