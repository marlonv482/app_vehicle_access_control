import { InfoModalComponent } from '@shared/modals/info-modal/info-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '@shared/components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    NavBarComponent,
    InfoModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    
  ],
  exports:[
    NavBarComponent,
    InfoModalComponent
  ]
})
export class SharedModule { }
