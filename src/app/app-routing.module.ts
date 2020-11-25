import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DaysCalculatorComponent } from './components/days-calculator/days-calculator.component';
import {LoginComponent} from './components/login/login.component'; 
import {RegisterComponent} from './components/register/register.component';
import {BudFinderComponent} from './components/bud-finder/bud-finder.component';
import { AuthGuard } from './auth.guard';
import { LoginAuthGuard } from './login-auth.guard';


const routes: Routes = [
  {path:'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path:'login',component:LoginComponent, canActivate: [LoginAuthGuard]},
  {path:'register',component:RegisterComponent, canActivate: [AuthGuard]},
  {path: 'days', component: DaysCalculatorComponent, canActivate: [AuthGuard]},
  {path: 'find', component: BudFinderComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
