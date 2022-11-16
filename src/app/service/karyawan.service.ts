import { Injectable } from '@angular/core';
import {HttpClient,  HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Karyawan} from "../model/karyawan";

@Injectable({
  providedIn: 'root'
})
export class KaryawanService {

  private baseUrl='http://localhost:3000';

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-type':'application/json'})
  }

  getKaryawan(): Observable<Karyawan[]>{
    return this.http.get<Karyawan[]>(this.baseUrl+"/karyawan");
  }

  getKaryawanDetail(id:number): Observable<Karyawan>{
    return this.http.get<Karyawan>(this.baseUrl+"/karyawan"+`/${id}`)
  }

  addKaryawan(karyawan:Karyawan): Observable<Karyawan>{
    return this.http.post<Karyawan>(this.baseUrl+"/karyawan",karyawan,this.httpOptions)
  }
  deleteKaryawan(id:BigInt){
    return this.http.delete(this.baseUrl+"/karyawan/"+`${id}`)
  }

  updateKaryawan(id:any,karyawan:Karyawan):Observable<Karyawan>{
    return this.http.put<Karyawan>(this.baseUrl+"/karyawan/"+`${id}`,karyawan,this.httpOptions)
  }

}
