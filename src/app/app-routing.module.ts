import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DaysCalculatorComponent } from './components/days-calculator/days-calculator.component';
import {LoginComponent} from './components/login/login.component'; 
import {RegisterComponent} from './components/register/register.component';
import {BudFinderComponent} from './components/bud-finder/bud-finder.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'days', component: DaysCalculatorComponent},
  {path: 'find', component: BudFinderComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
