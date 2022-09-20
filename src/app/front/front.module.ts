import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderImputDirective } from './border-input.directive';
import { AccueilHomeComponent } from './accueil-home/accueil-home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const front_routes: Routes = [
  {path:'home' , component: AccueilHomeComponent },
  {path:'login', component: LoginComponent},
];

@NgModule({
  declarations: [
    BorderImputDirective,
    AccueilHomeComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(front_routes)
  ]
})
export class FrontModule {}
