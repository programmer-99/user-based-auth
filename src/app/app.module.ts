import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UniversityComponent } from './university/university.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { FilterPipe } from './filter.pipe'; // Import the custom pipe
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import HttpClientModule


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UniversityComponent,
    FilterPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
