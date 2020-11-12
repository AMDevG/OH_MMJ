import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AuthGuard } from './guards/auth.guard';
// import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DaysCalculatorComponent } from './components/days-calculator/days-calculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Font awesome imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMugHot, faHeart,
    faTh, faThList,
    faSignInAlt, faUserPlus,
    faPlaneDeparture, faMapMarked,
    faSearch, faWindowClose, faPen,
    faHiking, faCalendarAlt, faArchway, faComments,
    faCogs, faEdit, faTrashAlt, faArrowCircleLeft, faSave,
    faUpload
} from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faMugHot,
    faTh, faThList,
    faSignInAlt, faUserPlus,
    faPlaneDeparture, faMapMarked,
    faSearch, faWindowClose, faPen,
    faHiking, faCalendarAlt, faArchway, faComments,
    faCogs, faEdit, faTrashAlt, faArrowCircleLeft, faSave,
    faUpload
);


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DaysCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MatDatepickerModule],
    // CookieService,
    // {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
