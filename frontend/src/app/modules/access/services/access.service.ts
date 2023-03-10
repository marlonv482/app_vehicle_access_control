import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { VehicleModel } from 'src/app/core/models/vehicle.model';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class AccessService {
  private readonly URL = enviroment.api;
  private vehicleSelected!: VehicleModel;

  $showRecibModal=new EventEmitter<any>();
  $showDismissModal=new EventEmitter<any>();
  $showReportModal=new EventEmitter<any>();
  recibo:any;

  setRecibo(recibo){
    this.recibo=recibo;
  }
  getRecibo(){
    return this.recibo;
  }
  constructor(private http: HttpClient) {}
  getAllIncompleteAccess(): Observable<any> {
    return this.http.get(`${this.URL}/access/getAllIncompleteAccess`).pipe(
      map((dataRow: any) => {
        return dataRow.access;
      }),
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }
  getAllCompleteAccess(): Observable<any> {
    return this.http.get(`${this.URL}/access/getAllCompleteAccess`).pipe(
      map((dataRow: any) => {
        return dataRow.access;
      }),
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }

  recibeVehicle(plate:string){
    return  this.http.get(`${this.URL}/access/recibVehicle/${plate}`).pipe(
      map((dataRow: any) => {
        return dataRow.access;
      }),
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }
  dismissVehicle(plate:string){
    return  this.http.get(`${this.URL}/access/dismissVehicle/${plate}`).pipe(
      map((dataRow: any) => {
        return dataRow.access;
      }),
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }
  generateCutResident(){
    return  this.http.get(`${this.URL}/cuts/generateCutResident/`).pipe(
      map((dataRow: any) => {
        return dataRow.vehicles;
      }),
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }
}
