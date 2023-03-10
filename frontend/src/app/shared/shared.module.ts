import { InfoModalComponent } from '@shared/modals/info-modal/info-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '@shared/components/nav-bar/nav-bar.component';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';



@NgModule({
  declarations: [
    NavBarComponent,
    InfoModalComponent,
    ErrorModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    
  ],
  exports:[
    NavBarComponent,
    InfoModalComponent,
    ErrorModalComponent
  ]
})
export class SharedModule { }
