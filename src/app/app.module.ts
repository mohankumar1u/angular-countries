import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CountriesComponent } from './countries/countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { AppRoutingModule } from './app-routing/app-routing.module'

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HeaderComponent, CountriesComponent, SingleCountryComponent,],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
