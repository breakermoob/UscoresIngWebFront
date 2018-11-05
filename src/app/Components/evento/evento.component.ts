import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../Servicios/crear/evento/evento.service';
import { RegistroService } from '../../Servicios/registro/registro.service';
import { Torneo } from '../../Entidades/torneo';

/*Autor: Leon Dario Arango
         Yennifer Vanessa Serna 
*/
@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  id: number;
  nombre: String;
  lugar: String;
  correo = this.serviciosRegistro.correo;
  torneo: Torneo = this.serviciosEvento.torneo;

  constructor(public serviciosEvento: EventoService, public serviciosRegistro: RegistroService) { }

  ngOnInit() {
  }

  agregar() {//recordar enviar idTorneo desde el torneo seleccionado o creado
    this.serviciosEvento.creaEvento(this.correo, this.nombre, this.lugar, this.id, this.torneo.id).subscribe(
      result => {
        console.log(result);
        var midiv = document.createElement("LI");
        midiv.setAttribute("class", "collection-item");
        midiv.innerHTML = this.nombre.toString();
        document.getElementById('lista').appendChild(midiv); // Lo pones en "body", si quieres ponerlo dentro de algún id en concreto usas
      }
    );
  }

}
