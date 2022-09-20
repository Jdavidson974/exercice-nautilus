import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataIdDirective } from './data-id.directive';

const dashboard_routes: Routes = [
  {path:'dashboard' , component: DashboardComponent },
];

@NgModule({
  declarations: [
  
    DashboardComponent,
    DataIdDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(dashboard_routes)
  ]
})
export class DashboardModule { }
