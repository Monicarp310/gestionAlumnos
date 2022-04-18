import { Injectable } from '@angular/core';
import { AlumnInfo } from '../models/altaAlumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  user! : AlumnInfo;

  constructor() { }

  getUser(): AlumnInfo{
    return this.user;
  }

  setUser(nUser:AlumnInfo) : void{
    this.user = nUser;
  }

  getUsers(): AlumnInfo[] | undefined{
    return JSON.parse(localStorage.getItem('Alumnos')!!);
  }

  deleteUser():void {

  }
}
