import { AccessService } from './../../services/access.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-icomplete-access',
  templateUrl: './icomplete-access.component.html',
  styleUrls: ['./icomplete-access.component.css']
})
export class IcompleteAccessComponent {
  incompleteAccess:Array<any>=[];
constructor(private accessService:AccessService){

}
  ngOnInit(){
   
    this.accessService.getAllIncompleteAccess()
    .subscribe(response=>{
      console.log(response)
      this.incompleteAccess=response
    })
  }
}
