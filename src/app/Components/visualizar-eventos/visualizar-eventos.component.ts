import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../Servicios/crear/evento/evento.service';
import { Evento } from 'src/app/Entidades/evento';
import { FavoritosService } from '../../Servicios/favoritos/favoritos.service';
import { RegistroService } from '../../Servicios/registro/registro.service';

/*Autor: Leon Dario Arango
         Yennifer Vanessa Serna 
*/
@Component({
  selector: 'app-visualizar-eventos',
  templateUrl: './visualizar-eventos.component.html',
  styleUrls: ['./visualizar-eventos.component.css']
})
export class VisualizarEventosComponent implements OnInit {

  eventos:Evento[] = this.serviciosEventos.eventos; 
  correo: String = this.serviciosRegistro.correo;
  

  constructor(public serviciosEventos: EventoService, public serviciosFavoritos: FavoritosService, public serviciosRegistro: RegistroService) { 

  }
  ngOnInit() {
    
  }

  agregarFavorito(evento: Evento){
    if (this.correo!='') {
      this.serviciosFavoritos.agregarFavorito(evento).subscribe(
        result=>{
          console.log(result);
          evento.estado = "Agregado"
          document.getElementById(evento.id.toString()).style.display = "none";
          document.getElementById(evento.id.toString()+"E").style.color = '#8bc34a';
        },
        error => {
          evento.estado = "Ya se encuentra en tu lista"
          document.getElementById(evento.id.toString()).style.display = "none";
          document.getElementById(evento.id.toString()+"E").style.color= '#e53935';
  
      
        }
      );
      
    } else {
      alert("Para agregar Favoritos debe iniciar sesión");
    }
  }

}
