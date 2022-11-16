import { Component, OnInit } from '@angular/core';
import {Karyawan} from "../model/karyawan";
import {ActivatedRoute} from "@angular/router";
import {KaryawanService} from "../service/karyawan.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-detail-karyawan',
  templateUrl: './detail-karyawan.component.html',
  styleUrls: ['./detail-karyawan.component.css']
})
export class DetailKaryawanComponent implements OnInit {

  karyawan: Karyawan | undefined;

  constructor(private karyawanService: KaryawanService, private router: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    this.getKaryawan();
  }

  getKaryawan(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.karyawanService.getKaryawanDetail(id)
      .subscribe(a => this.karyawan = a);
  }

  goBack(): void {
    this.location.back()
  }

}
