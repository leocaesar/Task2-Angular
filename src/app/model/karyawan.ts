export interface Karyawan {
  id:number;
  name: string;
  skill: string;
  phone: string;
  notes: string;
}

export class KaryawanModel{
  constructor(
    public id: number,
    public name: string,
    public skill: string,
    public phone:string,
    public notes:string
  ) {
  }
}
