import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { AccesPageComponent } from './pages/acces-page/acces-page.component';
import { AddAccessComponent } from './components/add-access/add-access.component';
import { IcompleteAccessComponent } from './components/icomplete-access/icomplete-access.component';
import { CompleteAccessComponent } from './components/complete-access/complete-access.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccesPageComponent,
    AddAccessComponent,
    IcompleteAccessComponent,
    CompleteAccessComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule,
    FormsModule 
  ]
})
export class AccessModule { }
