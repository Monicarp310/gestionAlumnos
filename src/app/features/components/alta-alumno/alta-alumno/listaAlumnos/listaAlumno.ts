import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'listaAlumno',
  templateUrl: './listaAlumno.component.html',
  styleUrls: ['./listaAlumno.component.scss']
})
export class listaAlumnoComponent implements OnInit {

  registerForm !: FormGroup;
  hide = true;

  name = new FormControl('', [Validators.required]);
  surname1 = new FormControl('', [Validators.required]);
  surname2 = new FormControl();
  email = new FormControl('', [Validators.required, Validators.email]);
  dni = new FormControl('', [Validators.required, Validators.pattern("[0-9]{8}[A-Za-z]{1}")]);
  phone = new FormControl('', [Validators.required, Validators.pattern("(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}")]);
  phone2 = new FormControl();
  country = new FormControl('', [Validators.required]);
  province = new FormControl('', [Validators.required]);
  postalCode = new FormControl('', [Validators.required, Validators.pattern("^[0-5][1-9]{3}[0-9]")]);
  town = new FormControl('', [Validators.required]);
  nickname = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);


  constructor(
    public dialogRef: MatDialogRef<listaAlumnoComponent>,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Introduce un nombre';
    }

    if (this.surname1.hasError('required')) {
      return 'Introduce un apellido';
    }

    if (this.dni.hasError('required')) {
      return 'Introduce un DNI';
    } else if (this.dni.hasError('dni')) {
      return 'Escribe un DNI valido';
    }

    if (this.phone.hasError('required')) {
      return 'Introduce un número de teléfono';
    } else if (this.phone.hasError('dni')) {
      return 'Escribe un número de teléfono valido';
    }

    if (this.country.hasError('required')) {
      return 'Seleccionar un país';
    }

    if (this.province.hasError('required')) {
      return 'Seleccionar una provincia';
    }

    if (this.postalCode.hasError('required')) {
      return 'Introduce un código postal';
    } else if (this.postalCode.hasError('dni')) {
      return 'Escribe un código postal valido';
    }

    if (this.town.hasError('required')) {
      return 'Introduce una localidad';
    }

    if (this.nickname.hasError('required')) {
      return 'Introduce un nickname';
    }

    if (this.password.hasError('required')) {
      return 'Introduce una contraseña';
    }

    return this.email.hasError('email') ? 'Introducir un email valido' : '';
  }
}
