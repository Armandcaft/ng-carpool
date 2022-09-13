import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateTypeVehiculeComponent } from './components/type-vehicule/update-type-vehicule/update-type-vehicule.component';
import { CreateTypeVehiculeComponent } from './components/type-vehicule/create-type-vehicule/create-type-vehicule.component';
import { TypeVehiculeListComponent } from './components/type-vehicule/type-vehicule-list/type-vehicule-list.component';
import { CreateVehiculeComponent } from './components/vehicule/create-vehicule/create-vehicule.component';
import { VehiculeDetailsComponent } from './components/vehicule/vehicule-details/vehicule-details.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { VehiculeListComponent } from './components/vehicule/vehicule-list/vehicule-list.component';
import { TypeVehiculeDetailsComponent } from './components/type-vehicule/type-vehicule-details/type-vehicule-details.component';
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

const routes: Routes = [

  // {path: 'users', component: UserListComponent},
  // {path: '', redirectTo: 'users', pathMatch: 'full'},

  {path: 'typeVehicules', component: TypeVehiculeListComponent},
  {path: 'create-type-vehicule', component: CreateTypeVehiculeComponent},
  {path: '', redirectTo: 'typeVehicules', pathMatch: 'full'},
  {path: 'update-type-vehicule/:id', component: UpdateTypeVehiculeComponent},
  {path: 'type-vehicule-details/:id', component: TypeVehiculeDetailsComponent},

  {path: 'vehicules', component: VehiculeListComponent},
  {path: 'create-vehicule', component: CreateVehiculeComponent},
  {path: '', redirectTo: 'vehicules', pathMatch: 'full'},
  {path: 'update-vehicule/:id', component: UpdateVehiculeComponent},
  {path: 'vehicule-details/:id', component: VehiculeDetailsComponent},

  {path: 'typeOptions', component: TypeOptionListComponent},
  {path: 'create-type-option', component: CreateTypeOptionComponent},
  {path: '', redirectTo: 'type-options', pathMatch: 'full'},
  {path: 'update-type-option/:id', component: UpdateTypeOptionComponent},
  {path: 'type-option-details/:id', component: TypeOptionDetailsComponent},

  {path: 'options', component: OptionListComponent},
  {path: 'create-option', component: CreateOptionComponent},
  {path: '', redirectTo: 'options', pathMatch: 'full'},
  {path: 'update-option/:id', component: UpdateOptionComponent},
  {path: 'option-details/:id', component: OptionDetailsComponent},

  {path: 'pointArret', component: PointArretListComponent},
  {path: 'create-point-arret', component: CreatePointArretComponent},
  {path: '', redirectTo: 'point-arrets', pathMatch: 'full'},
  {path: 'update-point-arret/:id', component: UpdatePointArretComponent},
  {path: 'point-arret-details/:id', component: PointArretDetailsComponent},

  {path: 'reservations', component: ReservationListComponent},
  {path: 'create-reservation', component: CreateReservationComponent},
  {path: '', redirectTo: 'reservations', pathMatch: 'full'},
  {path: 'update-reservation/:id', component: UpdateReservationComponent},
  {path: 'reservation-details/:id', component: ReservationDetailsComponent},

  {path: 'serviceTrajets', component: ServiceTrajetListComponent},
  {path: 'create-service-trajet', component: CreateServiceTrajetComponent},
  {path: '', redirectTo: 'service-trajets', pathMatch: 'full'},
  {path: 'update-service-trajet/:id', component: UpdateServiceTrajetComponent},
  {path: 'service-trajet-details/:id', component: ServiceTrajetDetailsComponent},

  {path: 'trajets', component: TrajetListComponent},
  {path: 'create-trajet', component: CreateTrajetComponent},
  {path: '', redirectTo: 'trajets', pathMatch: 'full'},
  {path: 'update-trajet/:id', component: UpdateTrajetComponent},
  {path: 'trajet-details/:id', component: TrajetDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
