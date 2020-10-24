import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      edad: new FormControl('', [
        this.edadValidator
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      dni: new FormControl('', [
        this.dniValidator
      ]),
      password: new FormControl(),
      passwordRepeat: new FormControl()
    }, [
      this.passwordValidator
    ]);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

  edadValidator(control) {
    const value = control.value;

    if (value == '') return null;

    const min = 21;
    const max = 65;

    if (value >= min && value <= max) {
      return null;
    } else {
      return { edadvalidator: { min: min, max: max } };
    }
  }

  dniValidator(control) {
    const dni = control.value;
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (/^\d{8}[a-zA-Z]$/.test(dni)) {
      const numero = dni.substr(0, dni.length - 1);
      const letr = dni.substr(dni.length - 1, 1);
      const resto = numero % 23;
      if (letras.substring(resto, resto + 1) != letr.toUpperCase()) {
        return { dnivalidator: 'La letra no coincide' };
      } else {
        return null;
      }
    } else {
      return { dnivalidator: 'El formato del DNI es incorrecto' }
    }
  }

  passwordValidator(form: FormGroup) {
    const passwordValue = form.get('password').value;
    const passwordRepeatValue = form.get('passwordRepeat').value;

    if (passwordValue === passwordRepeatValue) {
      return null;
    } else {
      form.get('passwordRepeat').setErrors({ passwordrepeat: true });
      return { passwordvalidator: 'Las password no coinciden' };
    }
  }

}
