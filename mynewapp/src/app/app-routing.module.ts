import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstantesVehiculo } from './admin-vehiculos/constantes.vehiculo';
import { VehiculoComponent } from './admin-vehiculos/vehiculo.component';

const routes: Routes = [

  { path: ConstantesVehiculo.PATH_ADMIN_VEHICULO, component: VehiculoComponent },
  { path: '', redirectTo: ConstantesVehiculo.PATH_ADMIN_VEHICULO, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
