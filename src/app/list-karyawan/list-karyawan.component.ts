import {Component, Input, OnInit} from '@angular/core';
import {Karyawan} from "../model/karyawan";
import {KaryawanService} from "../service/karyawan.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-karyawan',
  templateUrl: './list-karyawan.component.html',
  styleUrls: ['./list-karyawan.component.css']
})
export class ListKaryawanComponent {

  constructor(private karyawanService: KaryawanService, private route:Router) {
  }
  @Input() karyawan!: Karyawan;


}
