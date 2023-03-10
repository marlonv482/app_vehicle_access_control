import { SharedService } from '@shared/services/shared.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccessService } from '@modules/access/services/access.service';

@Component({
  selector: 'app-recibe-access',
  templateUrl: './recibe-access.component.html',
  styleUrls: ['./recibe-access.component.css']
})
export class RecibeAccessComponent {
  formRecibVehicle:FormGroup=new FormGroup({});
  showInfoModal:boolean=false;
  showErrorModal:boolean=false;
  ngOnInit(){
    this.formRecibVehicle=new FormGroup({
      plate:new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ])
    })
  }
  constructor(private accessService:AccessService){

  }
  hideModal(){
    this.accessService.$showRecibModal.emit(false)
  }
  recibAccess(){
    const plate=this.formRecibVehicle.value.plate;
   
    this.accessService.recibeVehicle(plate)
    .subscribe(response=>{
      if(response!=null){
        this.showInfoModal=true
      }else{
        this.showErrorModal=true;
      }
    })
  }
}
