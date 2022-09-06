import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { UpdateTypeVehiculeComponent } from './components/type-vehicule/update-type-vehicule/update-type-vehicule.component';
import { UpdateVehiculeComponent } from './components/vehicule/update-vehicule/update-vehicule.component';
import { OptionListComponent } from './components/option/option-list/option-list.component';
import { CreateOptionComponent } from './components/option/create-option/create-option.component';
import { UpdateOptionComponent } from './components/option/update-option/update-option.component';
import { OptionDetailsComponent } from './components/option/option-details/option-details.component';
import { TypeOptionDetailsComponent } from './components/type-option/type-option-details/type-option-details.component';
import { TypeOptionListComponent } from './components/type-option/type-option-list/type-option-list.component';
import { CreateTypeOptionComponent } from './components/type-option/create-type-option/create-type-option.component';
import { UpdateTypeOptionComponent } from './components/type-option/update-type-option/update-type-option.component';
import { PointArretListComponent } from './components/point-arret/point-arret-list/point-arret-list.component';
import { PointArretDetailsComponent } from './components/point-arret/point-arret-details/point-arret-details.component';
import { CreatePointArretComponent } from './components/point-arret/create-point-arret/create-point-arret.component';
import { UpdatePointArretComponent } from './components/point-arret/update-point-arret/update-point-arret.component';
import { ReservationListComponent } from './components/reservation/reservation-list/reservation-list.component';
import { ReservationDetailsComponent } from './components/reservation/reservation-details/reservation-details.component';
import { CreateReservationComponent } from './components/reservation/create-reservation/create-reservation.component';
import { UpdateReservationComponent } from './components/reservation/update-reservation/update-reservation.component';
import { UpdateServiceTrajetComponent } from './components/service-trajet/update-service-trajet/update-service-trajet.component';
import { CreateServiceTrajetComponent } from './components/service-trajet/create-service-trajet/create-service-trajet.component';
import { ServiceTrajetListComponent } from './components/service-trajet/service-trajet-list/service-trajet-list.component';
import { ServiceTrajetDetailsComponent } from './components/service-trajet/service-trajet-details/service-trajet-details.component';
import { TrajetDetailsComponent } from './components/trajet/trajet-details/trajet-details.component';
import { TrajetListComponent } from './components/trajet/trajet-list/trajet-list.component';
import { CreateTrajetComponent } from './components/trajet/create-trajet/create-trajet.component';
import { UpdateTrajetComponent } from './components/trajet/update-trajet/update-trajet.component';
import { CreateRoleComponent } from './components/role/create-role/create-role.component';
import { UpdateRoleComponent } from './components/role/update-role/update-role.component';
import { RoleDetailsComponent } from './components/role/role-details/role-details.component';
import { RoleListComponent } from './components/role/role-list/role-list.component';

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
    CreateTypeVehiculeComponent,
    UpdateTypeVehiculeComponent,
    UpdateVehiculeComponent,
    OptionListComponent,
    CreateOptionComponent,
    UpdateOptionComponent,
    OptionDetailsComponent,
    TypeOptionDetailsComponent,
    TypeOptionListComponent,
    CreateTypeOptionComponent,
    UpdateTypeOptionComponent,
    PointArretListComponent,
    PointArretDetailsComponent,
    CreatePointArretComponent,
    UpdatePointArretComponent,
    ReservationListComponent,
    ReservationDetailsComponent,
    CreateReservationComponent,
    UpdateReservationComponent,
    UpdateServiceTrajetComponent,
    CreateServiceTrajetComponent,
    ServiceTrajetListComponent,
    ServiceTrajetDetailsComponent,
    TrajetDetailsComponent,
    TrajetListComponent,
    CreateTrajetComponent,
    UpdateTrajetComponent,
    CreateRoleComponent,
    UpdateRoleComponent,
    RoleDetailsComponent,
    RoleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
