import { Component } from '@angular/core';
import { AccessService } from '@modules/access/services/access.service';

@Component({
  selector: 'app-complete-access',
  templateUrl: './complete-access.component.html',
  styleUrls: ['./complete-access.component.css']
})
export class CompleteAccessComponent {
  completeAccess:Array<any>=[];
  constructor(private accessService:AccessService){
  
  }
    ngOnInit(){
     
      this.accessService.getAllCompleteAccess()
      .subscribe(response=>{
       
        this.completeAccess=response
      })
    }
}
