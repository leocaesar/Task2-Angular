import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KaryawanComponent } from './karyawan/karyawan.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ListKaryawanComponent } from './list-karyawan/list-karyawan.component';
import { DetailKaryawanComponent } from './detail-karyawan/detail-karyawan.component';
import { UpdateKaryawanComponent } from './update-karyawan/update-karyawan.component';

@NgModule({
  declarations: [
    AppComponent,
    KaryawanComponent,
    ListKaryawanComponent,
    DetailKaryawanComponent,
    UpdateKaryawanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
