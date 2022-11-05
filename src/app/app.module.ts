import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';
import {MatInputModule}  from '@angular/material/input';
import{MatFormFieldModule} from '@angular/material/form-field'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {  MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashbchartsComponent } from './dashbcharts/dashbcharts.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardsComponent } from './cards/cards.component';
import { PiechartComponent } from './piechart/piechart.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MapchartComponent } from './mapchart/mapchart.component';
import { CompsComponent } from './comps/comps.component';
import {MatSelectModule} from '@angular/material/select';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    SigninComponent,
    AdmindashboardComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    DashbchartsComponent,
    CardsComponent,
    PiechartComponent,
    MapchartComponent,
    CompsComponent,
    EmployeeListComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    FlexLayoutModule,
    HighchartsChartModule,
    MatPaginatorModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
