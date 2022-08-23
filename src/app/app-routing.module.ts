import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactusComponent } from './contactus/contactus.component';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { Year1Component } from './year1/year1.component';
import { Year2Component } from './year2/year2.component';
import { Year4Component } from './year4/year4.component';
import { Year3Component } from './year3/year3.component';
import { Semester1Component } from './semester1/semester1.component';
import { CompilerdesComponent } from './compilerdes/compilerdes.component';




const routes: Routes = [

  {path:'home',component:HomeComponent},
 {path:'register',component:RegisterComponent},
 {path:'login',component:LoginComponent},
 {path:'contactus',component:ContactusComponent},
  {path:'subjects',component:SubjectsComponent , children:[
    {path:'year1',component:Year1Component},
    {path:'year2',component:Year2Component,children:[{
      path:'semester1',component:Semester1Component,children:[
        {path:'compilerdes',component:CompilerdesComponent}
      ]
    }]},
    {path:'year3',component:Year3Component},
    {path:'year4',component:Year4Component},
    
  ]}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
 {path:'home',component:HomeComponent},
 {path:'register',component:RegisterComponent},
 {path:'login',component:LoginComponent},
 {path:'contactus',component:ContactusComponent},
 {path:'',redirectTo:'/home',pathMatch:"full"}
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
*/