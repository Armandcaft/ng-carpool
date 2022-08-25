import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateTypeVehiculeComponent } from './components/type-vehicule/update-type-vehicule/update-type-vehicule.component';
import { CreateTypeVehiculeComponent } from './components/type-vehicule/create-type-vehicule/create-type-vehicule.component';
import { CreateVehiculeComponent } from './components/vehicule/create-vehicule/create-vehicule.component';
import { TypeVehiculeListComponent } from './components/type-vehicule/type-vehicule-list/type-vehicule-list.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { VehiculeListComponent } from './components/vehicule/vehicule-list/vehicule-list.component';
import { TypeVehiculeDetailsComponent } from './components/type-vehicule/type-vehicule-details/type-vehicule-details.component';

const routes: Routes = [

  // {path: 'users', component: UserListComponent},
  // {path: '', redirectTo: 'users', pathMatch: 'full'},

  {path: 'typeVehicules', component: TypeVehiculeListComponent},
  {path: 'create-type-vehicule', component: CreateTypeVehiculeComponent},
  {path: '', redirectTo: 'type-vehicules', pathMatch: 'full'},
  {path: 'update-type-vehicule/:id', component: UpdateTypeVehiculeComponent},
  {path: 'type-vehicule-details/:id', component: TypeVehiculeDetailsComponent},

  {path: 'vehicules', component: VehiculeListComponent},
  {path: 'create-vehicule', component: CreateVehiculeComponent},
  {path: '', redirectTo: 'vehicules', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
