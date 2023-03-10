import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  linksMenu: Array<any> = [
    { name: 'Accesos', router: ['/', 'acceso'] },
    { name: 'Vehiculos', router: ['/', 'vehiculos'] },
    { name: 'Tipos de Vehiculos', router: ['/', 'tipos_vehiculo'] },
    
  ];
  constructor(private authService:AuthService, private route:Router){

  }
  logout(){
    this.authService.logout()
    .subscribe(response=>{
      if(response!=null){
        this.route.navigate(['/','auth'])
      }
    })
  }
}
