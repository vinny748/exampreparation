import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { Year1Component } from './year1/year1.component';
import { Year2Component } from './year2/year2.component';
import { Year3Component } from './year3/year3.component';
import { Year4Component } from './year4/year4.component';
import { Semester1Component } from './semester1/semester1.component';
import { CompilerdesComponent } from './compilerdes/compilerdes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactusComponent,
    FooterComponent,
    HomeComponent,
    SubjectsComponent,
    Year1Component,
    Year2Component,
    Year3Component,
    Year4Component,
    Semester1Component,
    CompilerdesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
