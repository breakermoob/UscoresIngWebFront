import { Component } from '@angular/core';
import { RegistroService } from "./Servicios/registro/registro.service";
import { Usuario } from './Entidades/usuario';
import { Router } from '@angular/router';

/*Autor: Leon Dario Arango
         Yennifer Vanessa Serna 
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  errorMess: String = '';
  user: Usuario = {
    correo: '',
    contrasena: '',
    nombre: ''
  }

  onLogin() {
    this.servicios.login(this.user.correo, this.user.contrasena).subscribe(
      result => {
        if (result == 'Usuario y/o contraseña invalida') {
          this.errorMess = 'Usuario y/o contraseña invalida';
        } else {
          document.getElementById('id01').style.display = 'none';
          document.getElementById('id02').style.display = 'block';
          document.getElementById('id03').style.display = 'none';
          this.errorMess = '';
          this.servicios.correo = this.user.correo;
          this.routes.navigate(['']);
        }
      },
      error => {
        console.log(<any>error);
        this.errorMess = 'Usuario y/o contraseña invalida';
      }
    )
  }

  onLoginOut() {
    this.servicios.nombre = '';
    this.servicios.contrasena = '';
    this.servicios.correo = '';
    document.getElementById('id02').style.display = 'none';
    document.getElementById('id03').style.display = 'block';
    this.routes.navigate(['']);
  }

  constructor(public servicios: RegistroService, public routes: Router) {

  }

}
