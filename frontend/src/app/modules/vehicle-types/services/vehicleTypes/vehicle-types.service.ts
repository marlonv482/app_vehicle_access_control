import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VehicleTypesService {
  private readonly URL=environment.api;

  $addVehicleTypeModal=new EventEmitter<any>();
  
  constructor(private http:HttpClient,private cookie:CookieService){
  
  }
  getAllVehicleTypes():Observable<any>{
    const token=this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.URL}/vehicleTypes/getAllVehicleTypes`,{headers}).pipe(
      map((dataRow:any)=>{
        return dataRow.vehicleTypes
      }),
      catchError((err)=>{
        console.log(err)
        return of([])
      })
    );
  }
  addVehicleType(vehicleType):Observable<any>{
    const token=this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.URL}/vehicleTypes/addVehicleType`,vehicleType,{headers}).pipe(
      map((dataRow:any)=>{
        return dataRow.vehicleType
      }),
      catchError((err)=>{
        console.log(err)
        return of([])
      })
    );
  }
  
}
