import { CookieService } from 'ngx-cookie-service';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { VehicleModel } from 'src/app/core/models/vehicle.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccessService {
  private readonly URL = environment.api;
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
  
  constructor(private http: HttpClient,private cookie:CookieService) {


  }
  getAllIncompleteAccess(): Observable<any> {
    const token=this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.URL}/access/getAllIncompleteAccess`,{headers}).pipe(
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
    const token=this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.URL}/access/getAllCompleteAccess`,{headers}).pipe(
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
    const token=this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return  this.http.get(`${this.URL}/access/recibVehicle/${plate}`,{headers}).pipe(
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
    const token=this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return  this.http.get(`${this.URL}/access/dismissVehicle/${plate}`,{headers}).pipe(
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
    const token=this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return  this.http.get(`${this.URL}/cuts/generateCutResident/`,{headers}).pipe(
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
