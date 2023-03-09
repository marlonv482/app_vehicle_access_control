import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { VehicleModel } from 'src/app/core/models/vehicle.model';
import { enviroment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private readonly URL=enviroment.api;
  private vehicleSelected!: VehicleModel;
constructor(private http:HttpClient){

}
  $addVehicleModal=new EventEmitter<any>();
  $editVehicleModal=new EventEmitter<any>();
  $vehicleSelected=new EventEmitter<VehicleModel>;

  getAllVehicles():Observable<any>{
    return this.http.get(`${this.URL}/vehicles/getAllVehicles`).pipe(
      map((dataRow:any)=>{
        return dataRow.vehicles
      })
    );
  }
  
  getVehicleById(id:number):Observable<any>{
    return this.http.get(`${this.URL}/vehicles/getVehicleById/${id}`).pipe(
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
    
    return this.http.post(`${this.URL}/vehicles/addVehicle`,vehicle).pipe(
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
    console.log( this.vehicleSelected)
  }
  getVehicleSelected(){
    return this.vehicleSelected;
  }
}
