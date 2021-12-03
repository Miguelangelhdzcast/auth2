import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesComponent } from './actividades/actividades.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MisactividadesComponent } from './misactividades/misactividades.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'lista', component:ActividadesComponent},
  {path: 'misactividades', component:MisactividadesComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
