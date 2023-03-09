import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  route:any;
  setRoute(route:any){
    this.route=route;
  }
  getRoute(){
    return this.route;
  }
}
