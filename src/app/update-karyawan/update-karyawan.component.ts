import {Component, OnInit} from '@angular/core';
import {KaryawanService} from "../service/karyawan.service";
import {ActivatedRoute} from "@angular/router";
import {Karyawan, KaryawanModel} from "../model/karyawan";

@Component({
  selector: 'app-update-karyawan',
  templateUrl: './update-karyawan.component.html',
  styleUrls: ['./update-karyawan.component.css']
})
export class UpdateKaryawanComponent implements OnInit {

  constructor(private karyawanService: KaryawanService, private router: ActivatedRoute) {
  }

  karyawan: Karyawan | undefined;

  ngOnInit(): void {
    this.getKaryawan();
  }
  listKaryawan: Karyawan[] = [];
  karyawanModel = new KaryawanModel(0, "", "", "","")

  getKaryawan(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    console.log(id)
    this.karyawanService.getKaryawanDetail(id)
      .subscribe(a => {
        this.karyawanModel.id = a.id;
        this.karyawanModel.name=a.name;
        this.karyawanModel.skill=a.skill;
        this.karyawanModel.phone=a.phone;
        this.karyawanModel.notes=a.notes;
      });
  }

  updateKaryawan(  name: string = this.karyawanModel.name,
                   skill: string = this.karyawanModel.skill,
                   phone: string = this.karyawanModel.phone,
                   notes: string = this.karyawanModel.notes,
                   id:any = this.karyawanModel.id
  ): void {
    name = name.trim();
    skill = skill.trim();
    phone = phone.trim();
    notes = notes.trim();
    if (!name) {
      return
    }
    this.karyawanService.updateKaryawan(id,{name, skill, phone} as Karyawan)
      .subscribe(a => {
        this.listKaryawan.push(a)
      })
    this.ngOnInit();
  }
}
