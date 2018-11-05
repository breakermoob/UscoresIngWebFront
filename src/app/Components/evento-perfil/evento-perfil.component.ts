import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../Servicios/favoritos/favoritos.service';
import { EventoService } from '../../Servicios/crear/evento/evento.service';
import { RegistroService } from '../../Servicios/registro/registro.service';
import { Evento } from '../../Entidades/evento';
import { Torneo } from '../../Entidades/torneo';

/*Autor: Leon Dario Arango
         Yennifer Vanessa Serna 
*/
@Component({
  selector: 'app-evento-perfil',
  templateUrl: './evento-perfil.component.html',
  styleUrls: ['./evento-perfil.component.css']
})
export class EventoPerfilComponent implements OnInit {

  show: boolean = true;
  eventos:Evento[] = this.serviciosEventos.eventos;
  evento: Evento[] = this.serviciosEventos.eventos;
  id: number;
  nombre: String;
  lugar: String;
  correo = this.serviciosRegistro.correo;
  torneo: Torneo = this.serviciosEventos.torneo;
  constructor(public serviciosEventos: EventoService, public serviciosFavoritos: FavoritosService, public serviciosRegistro: RegistroService) { 

        console.log(this.eventos.length);
        if (this.eventos.length == undefined) {
          this.show = false;
        } else {
          this.show = true;
        }
  }

  ngOnInit() {
  }

  eliminar(evento: Evento){
    this.serviciosEventos.eliminarEvento(evento).subscribe(
      result=>{
        console.log(result);
        document.getElementById(evento.id.toString()).innerHTML = "";
      }
    );
  }
  editar(evento: Evento){
    console.log(evento.nombre);
    console.log(evento.id);
  }


  agregar() {//recordar enviar idTorneo desde el torneo seleccionado o creado
    this.serviciosEventos.creaEvento(this.correo, this.nombre, this.lugar, this.id, this.torneo.id).subscribe(
      result => {
        var midiv = document.createElement("LI");
        midiv.setAttribute("class", "collection-item");
        midiv.innerHTML = this.nombre.toString();
        document.getElementById('lista').appendChild(midiv); // Lo pones en "body", si quieres ponerlo dentro de algún id en concreto usas 
      }
    );
  }

}
