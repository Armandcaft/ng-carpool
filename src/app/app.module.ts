import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { VehiculeDetailsComponent } from './components/vehicule/vehicule-details/vehicule-details.component';
import { VehiculeListComponent } from './components/vehicule/vehicule-list/vehicule-list.component';
import { TypeVehiculeListComponent } from './components/type-vehicule/type-vehicule-list/type-vehicule-list.component';
import { TypeVehiculeDetailsComponent } from './components/type-vehicule/type-vehicule-details/type-vehicule-details.component';
import { TypeVehiculeService } from './services/type-vehicule.service';
import { CreateVehiculeComponent } from './components/vehicule/create-vehicule/create-vehicule.component';
import { CreateTypeVehiculeComponent } from './components/type-vehicule/create-type-vehicule/create-type-vehicule.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    VehiculeDetailsComponent,
    VehiculeListComponent,
    TypeVehiculeListComponent,
    TypeVehiculeDetailsComponent,
    CreateVehiculeComponent,
    CreateTypeVehiculeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TypeVehiculeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
