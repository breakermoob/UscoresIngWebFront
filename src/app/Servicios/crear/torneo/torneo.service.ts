import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Torneo } from '../../../Entidades/torneo';
import { } from 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()

/*Autor: Leon Dario Arango
         Yennifer Vanessa Serna 
*/
export class TorneoService {

  correo: String = '';
  nombre: String = '';
  deporte: String = '';
  id: number = 0;

  constructor(private http: Http) {
  }

  torneosDisponibles(): Observable<any> {
    return this.http.get('http://localhost:8080/UscoresWS/us/Torneo').map(Response => { return Response.text() });
  }

  creaTorneo(correo: String, nombre: String, deporte: String, id: number): Observable<any> {
    const obj = {
      correo: this.correo,
      nombre: this.nombre,
      deporte: this.deporte,
      id: this.id
    }
    return this.http.post('http://localhost:8080/UscoresWS/us/Torneo?id=' + id + '&nombre=' + nombre + '&deporte=' + deporte + '&correo=' + correo
      , obj).map(Response => { return Response.text() });
  }

  eliminarTorneo(id: number,correo: String): Observable<any> {
    console.log(correo)
    return this.http.delete('http://localhost:8080/UscoresWS/us/Torneo?id='+id+"&correo="+correo).map(Response => { return Response.text() });
  }



}
