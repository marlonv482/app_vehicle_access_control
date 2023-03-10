import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { AccesPageComponent } from './pages/acces-page/acces-page.component';
import { IcompleteAccessComponent } from './components/icomplete-access/icomplete-access.component';
import { CompleteAccessComponent } from './components/complete-access/complete-access.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecibeAccessComponent } from './modals/recibe-access/recibe-access.component';
import { SharedModule } from '@shared/shared.module';
import { DismissAccessComponent } from './modals/dismiss-access/dismiss-access.component';
import { GenerateCutResidentialModalComponent } from './modals/generate-cut-residential-modal/generate-cut-residential-modal.component';
import { InfoAccessModalComponent } from './modals/info-access-modal/info-access-modal.component';


@NgModule({
  declarations: [
    AccesPageComponent,
    IcompleteAccessComponent,
    CompleteAccessComponent,
    RecibeAccessComponent,
    DismissAccessComponent,
    GenerateCutResidentialModalComponent,
    InfoAccessModalComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    SharedModule
  ],
  
})
export class AccessModule { }
