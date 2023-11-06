import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }