import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Evento } from '../../../Entidades/evento';
import { } from 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Torneo } from '../../../Entidades/torneo';
import { RegistroService } from '../../registro/registro.service';
/*Autor: Leon Dario Arango
         Yennifer Vanessa Serna 
*/
@Injectable()
export class EventoService {
  
  eventos:Evento[] = [];
  id: number;
  correo: String = this.serviciosRegistro.correo;
  nombre: String;
  lugar: String;
  idTorneo: number;
  torneo: Torneo;

  constructor(private http: Http, public serviciosRegistro:RegistroService) {}

  getEventos(idTorneo:number):Observable<any>{
    return this.http.get('http://localhost:8080/UscoresWS/us/Evento?idTorneo='+idTorneo).map( Response => {return Response.text()});
  }

  creaEvento(correo: String, nombre: String, lugar: String, id: number, idTorneo: number): Observable<any> {
    const obj = {
      id: this.id,
      correo: this.correo,
      nombre: this.nombre,
      lugar: this.lugar,
      idTorneo: this.idTorneo
      
    }
    return this.http.post('http://localhost:8080/UscoresWS/us/Evento?id=' + id + '&nombre=' + nombre + '&lugar=' + lugar + '&idTorneo=' + idTorneo
      , obj).map(Response => { return Response.text() });
  }

  eliminarEvento(evento: Evento){
    return this.http.delete('http://localhost:8080/UscoresWS/us/Evento?id=' + evento.id).map(Response => { return Response.text() });
  }
}
