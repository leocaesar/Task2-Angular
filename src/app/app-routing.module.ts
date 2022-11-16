import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KaryawanComponent} from "./karyawan/karyawan.component";
import {DetailKaryawanComponent} from "./detail-karyawan/detail-karyawan.component";
import {UpdateKaryawanComponent} from "./update-karyawan/update-karyawan.component";

const routes: Routes = [
  {path: 'karyawan', component: KaryawanComponent},
  {path: '',redirectTo:'/custom',pathMatch:'full'},
  {path:'karyawan/:id',component:DetailKaryawanComponent},
  {path:'update/:id',component:UpdateKaryawanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
