import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Entidades/usuario';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/Servicios/registro/registro.service';

/*Autor: Leon Dario Arango
         Yennifer Vanessa Serna 
*/
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: Usuario = {
    correo: '',
    contrasena: '',
    nombre: ''
  }
  errorMess: String = '';
  contrasena2: String = '';

  ngOnInit() {
  }

  constructor(public servicios: RegistroService, public routes: Router) { }

  crear() {
    if ((this.user.correo == '') ||(this.user.nombre == '') || (this.user.contrasena == '') || (this.contrasena2 == '')) {

      this.errorMess = 'Debe llenar todos los campos';

    } else if (this.user.contrasena != this.contrasena2) {

      this.errorMess = 'Contraseñas Diferentes';

    } else {

      this.servicios.registro(this.user.correo, this.user.nombre, this.user.contrasena).subscribe(
        result => {
          if (result == 'Usuario y/o contraseña invalida') {
            this.errorMess = result
          } else {
            document.getElementById('id01').style.display = 'none';
            document.getElementById('id02').style.display = 'block';
            document.getElementById('id03').style.display = 'none';
            this.errorMess = '';
            this.routes.navigate(['']);
          }
        },
        error => {
          console.log(<any>error);
          this.errorMess = 'El correo ya existe';
        })
    }
  }
}