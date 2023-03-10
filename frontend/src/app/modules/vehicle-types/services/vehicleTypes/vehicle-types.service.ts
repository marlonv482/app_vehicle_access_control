import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class VehicleTypesService {
  private readonly URL=enviroment.api;

  $addVehicleTypeModal=new EventEmitter<any>();
  
  constructor(private http:HttpClient){
  
  }
  getAllVehicleTypes():Observable<any>{
    return this.http.get(`${this.URL}/vehicleTypes/getAllVehicleTypes`).pipe(
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
    return this.http.post(`${this.URL}/vehicleTypes/addVehicleType`,vehicleType).pipe(
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
