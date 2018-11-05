import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/Servicios/registro/registro.service';
import { Router } from '@angular/router';
import { Usuario } from '../../Entidades/usuario';
import { MisTorneosService } from '../../Servicios/misTorneos/mis-torneos.service';
import { MisTorneos } from '../../Entidades/misTorneos';
import { TorneoService } from 'src/app/Servicios/crear/torneo/torneo.service';
import { Torneo } from 'src/app/Entidades/torneo';
import { VisualizarComponent } from '../visualizar/visualizar.component';
import { EventoService } from '../../Servicios/crear/evento/evento.service';
import { FavoritosService } from '../../Servicios/favoritos/favoritos.service';
import { Evento } from 'src/app/Entidades/evento';

/*Autor: Leon Dario Arango
         Yennifer Vanessa Serna 
*/
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  torneos: Torneo[] = [];
  torneo: Torneo;
  eventos: Evento[] = [];
  errorN: String = '';
  errorF: String = '';
  show: boolean = true;
  showE: boolean = true;
  id: String = '';
  user: Usuario = {
    correo: '',
    contrasena: '',
    nombre: ''
  }

  constructor(public servicios: RegistroService, public routes: Router,
    public misTorneosServicios: MisTorneosService, public serviciosTorneo: TorneoService,
    public serviciosEventos: EventoService, public serviciosFavoritos: FavoritosService) {

    this.user.correo = this.servicios.correo
    this.user.nombre = this.servicios.nombre
    this.user.contrasena = this.servicios.contrasena


    this.serviciosFavoritos.favoritos(this.user.correo).subscribe(result => {
      var obj = JSON.parse(result);
      if (obj == null) {
        this.errorF = 'No tienes Favoritos en tu lista'
      } else {
        this.errorF = ''
        this.eventos = obj.evento;
        if (this.eventos.length == undefined) {
          this.showE = false;
        } else {
          this.showE = true;
        }
      }
    })


    this.misTorneosServicios.misTorneos(this.user.correo).subscribe(result => {
      var obj = JSON.parse(result);
      if (obj == null) {
        this.errorN = 'No tienes Torneos creados'
      } else {
        this.errorN = ''
        this.torneos = obj.torneo;
        if (this.torneos.length == undefined) {
          this.show = false;
        } else {
          this.show = true;
        }
      }
    })
  }
  ngOnInit() {
  }

  quitar(evento) {
    this.id = evento.id;
    this.serviciosFavoritos.borrarFavorito(evento).subscribe(result => {
      console.log(this.id.toString());
      document.getElementById(this.id.toString()).innerHTML = "";
      console.log(result);
    }

    );

  }
  verMas(torneo: Torneo) {
    this.serviciosEventos.getEventos(torneo.id).subscribe(result => {
      var obj = JSON.parse(result);
      console.log(result)
      console.log(obj)
      if (obj == null) {
        torneo.error = 'Sin Eventos';

      } else {
        this.serviciosEventos.eventos = obj.evento
        this.routes.navigate(['/VisualizarEventos']);
      }

    })
  }

  verMasEventos(torneo: Torneo) {
    this.serviciosEventos.getEventos(torneo.id).subscribe(result => {
      var obj = JSON.parse(result);
      if (obj == null || '') {
        torneo.error='Sin Eventos';
        
      } else {
        console.log("EL result",result);
        this.serviciosEventos.eventos = obj.evento;
        this.serviciosEventos.torneo = torneo;
        this.routes.navigate(['/Eventos']);
      }

    })
  }

  eliminar(torneo) {
    this.serviciosTorneo.eliminarTorneo(torneo.id, this.user.correo).subscribe(
      result=>{
        document.getElementById(torneo.id.toString()+"T").innerHTML = "";
      },
      error=>{
        console.log(error);
      }
    );
  }

}
