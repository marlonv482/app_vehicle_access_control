import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccessService } from '@modules/access/services/access.service';

@Component({
  selector: 'app-dismiss-access',
  templateUrl: './dismiss-access.component.html',
  styleUrls: ['./dismiss-access.component.css']
})
export class DismissAccessComponent {
  formDismissVehicle:FormGroup=new FormGroup({});
  showInfoModal:boolean=false;
  showErrorModal:boolean=false;
  showInfoAccessModal:boolean=false;
  ngOnInit(){
    this.formDismissVehicle=new FormGroup({
      plate:new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ])
    })
  }
  constructor(private accessService:AccessService){

  }
  hideModal(){
    this.accessService.$showDismissModal.emit(false)
  }

  dismissAccess(){
    const plate=this.formDismissVehicle.value.plate;
   
    this.accessService.dismissVehicle(plate)
    .subscribe(response=>{
      if(response!=null){
        console.log(response.vehicle.vehicle_type);
       if (response.vehicle.vehicle_type.vehicle_type=='No Residente'){
        this.accessService.setRecibo({minutes:response.minutes,pay:response.pay})
        this.showInfoAccessModal=true
       }else{
        this.showInfoModal=true
       }
      
       
      }else{
        this.showErrorModal=true;
      }
    })
  }


}
