import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {Karyawan, KaryawanModel} from "../model/karyawan";
import {KaryawanService} from "../service/karyawan.service";

@Component({
  selector: 'app-karyawan',
  templateUrl: './karyawan.component.html',
  styleUrls: ['./karyawan.component.css']
})
export class KaryawanComponent implements OnInit {

  listKaryawan: Karyawan[] = [];
  title = "Karyawan List";

  karyawanModel = new KaryawanModel(0,"name1", "skill1", "phone1", "notes1")
  submitted = false;

  constructor(private karyawanService: KaryawanService, private router: ActivatedRoute, private route: Router, private location: Location) {
  }

  ngOnInit(): void {
    this.listKaryawan = []
    this.getKaryawan()
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    this.addKaryawan()
  }

  getKaryawan(): void {
    this.karyawanService.getKaryawan()
      .subscribe(listKaryawan => this.listKaryawan = listKaryawan)
  }

  deleteKaryawan(id: any) {
    console.log(id);
    this.karyawanService.deleteKaryawan(id).subscribe((result) => {
      this.ngOnInit();
    })
  }

  goBack(): void {
    this.location.back();
  }

  addKaryawan(
    name: string = this.karyawanModel.name,
    skill: string = this.karyawanModel.skill,
    phone: string = this.karyawanModel.phone,
    notes: string = this.karyawanModel.notes
  ): void {
    name = name.trim();
    skill = skill.trim();
    phone = phone.trim();
    notes = notes.trim();
    if (!name) {
      return
    }
    let id: number = this.listKaryawan.length + 1;
    this.karyawanService.addKaryawan({name, skill, phone} as Karyawan)
      .subscribe(a => {
        this.listKaryawan.push(a)
      })
    this.ngOnInit();
  }

  updateKaryawan(id: any) {
    this.route.navigate(['/update', id])
  }

}
