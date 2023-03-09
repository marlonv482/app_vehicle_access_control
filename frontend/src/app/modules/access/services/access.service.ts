import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleModel } from 'src/app/core/models/vehicle.model';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private readonly URL=enviroment.api;
  private vehicleSelected!: VehicleModel;
constructor(private http:HttpClient){

}
getAllIncompleteAccess():Observable<any>{
  return this.http.get(`${this.URL}/access/getAllIncompleteAccess`).pipe(
    map((dataRow:any)=>{
      return dataRow.access
    }),
    catchError((err)=>{
      console.log(err)
      return of([])
    })
  );
}
getAllCompleteAccess():Observable<any>{
  return this.http.get(`${this.URL}/access/getAllCompleteAccess`).pipe(
    map((dataRow:any)=>{
      return dataRow.access
    }),
    catchError((err)=>{
      console.log(err)
      return of([])
    })
  );
}
}
