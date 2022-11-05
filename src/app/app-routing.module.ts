import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

import { CompsComponent } from './comps/comps.component';
import { DashbchartsComponent } from './dashbcharts/dashbcharts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HeaderComponent } from './header/header.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MapchartComponent } from './mapchart/mapchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:"dsbc",component:DashbchartsComponent},
  {path:"piechart",component:PiechartComponent},
  {path:"mapchart",component:MapchartComponent},
  {path:"loginpage",component:LoginpageComponent},
  {path:"signin",component:SigninComponent},
  {path:"adb",component:AdmindashboardComponent,},
 {path:"dashboard",component:DashboardComponent},
 {path:"header",component:HeaderComponent},
 {path:"sidebar",component:SidebarComponent},
 {path: '',component:AdmindashboardComponent,
 children:[{path: '', component: DashboardComponent },
 {path:'comps',component:CompsComponent},{path:"pie",component:PiechartComponent},{path:"empl",component:EmployeeListComponent}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
