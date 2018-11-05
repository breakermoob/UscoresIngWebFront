import { Component, OnInit } from '@angular/core';
import { TorneoService } from '../../Servicios/crear/torneo/torneo.service';
import { RegistroService } from '../../Servicios/registro/registro.service';
import { Router } from '@angular/router';
import { Torneo } from '../../Entidades/torneo';
import { EventoService } from '../../Servicios/crear/evento/evento.service';

/*Autor: Leon Dario Arango
         Yennifer Vanessa Serna 
*/
@Component({
  selector: 'app-torneo',
  templateUrl: './torneo.component.html',
  styleUrls: ['./torneo.component.css']
})
export class TorneoComponent implements OnInit {

  correo = this.serviciosRegistro.correo;
  nombre: String;
  deporte: String;
  id: number;
  torneo: Torneo = {
    id: 0,
    nombre: '',
    deporte: '',
    error: ''
  }

  constructor(public serviciosTorneo: TorneoService,public serviciosEvento: EventoService, public serviciosRegistro: RegistroService, public routes: Router) { 
  }

  ngOnInit() {
  }

  crear(){
    this.torneo.deporte = this.deporte;
    this.torneo.id=this.id;
    this.torneo.nombre=this.nombre;
    this.serviciosEvento.torneo=this.torneo;
    this.serviciosTorneo.creaTorneo(this.correo,this.nombre,this.deporte,this.id).subscribe(
      result=>{
        this.routes.navigate(['crearEventos']);
      },
      error=>{
        console.log(error);
      }
    );
  }
}
