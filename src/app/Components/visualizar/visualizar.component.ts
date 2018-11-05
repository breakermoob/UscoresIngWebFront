import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/Servicios/crear/torneo/torneo.service';
import { Router } from '@angular/router';
import { Torneo } from '../../Entidades/torneo';
import { EventoService } from '../../Servicios/crear/evento/evento.service';
import { Evento } from '../../Entidades/evento';

/*Autor: Leon Dario Arango
         Yennifer Vanessa Serna 
*/
@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {

  torneos: Torneo[] = [];


  constructor(public servicios: TorneoService, public serviciosEventos: EventoService, public routes: Router) {
    this.servicios.torneosDisponibles().subscribe(result => {
      var obj = JSON.parse(result);
      this.torneos = obj.torneo;
    })
  }

  ngOnInit() {
  }

  verMas(torneo: Torneo) {
    this.serviciosEventos.getEventos(torneo.id).subscribe(result => {
      var obj = JSON.parse(result);
      if (obj == null) {
        torneo.error='Sin Eventos';
        
      } else {
        this.serviciosEventos.eventos = obj.evento;
        this.routes.navigate(['/VisualizarEventos']);
      }

    })
  }

}
