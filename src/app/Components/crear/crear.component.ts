import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../Servicios/registro/registro.service';
import { Router } from '@angular/router';

/*Autor: Leon Dario Arango
         Yennifer Vanessa Serna 
*/
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(public serviciosRegistro: RegistroService,  public routes: Router) { }

  ngOnInit() {
  }

  /* Metodo para validar si el usuario tienen sesion iniciada */
  validar(){

    if (this.serviciosRegistro.correo!='') {
      this.routes.navigate(['Torneo']);
    } else {
      alert("Para crear Torneos debe iniciar sesión");
    }

  }
}
