import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient, private cookie:CookieService,) {}

  login(user): Observable<any> {
    return this.http.post(`${this.URL}/login`, user).pipe(
      tap((response: any) => {
        if(response!=null){
          this.cookie.set('token',response.token,1,'/');
        this.cookie.set('user',response.user);
        }
      }),
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }
  logout(): Observable<any> {
    const token=this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.URL}/logout`,{ headers }).pipe(
      tap((response: any) => {
        if(response!=null){
          this.cookie.delete('token');
        this.cookie.delete('user');
        }
      }),
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }

}
