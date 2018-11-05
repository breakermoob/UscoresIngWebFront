import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Favoritos } from '../../Entidades/favoritos';
import { } from 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { RegistroService } from '../registro/registro.service';
import { Evento } from 'src/app/Entidades/evento';

/*Autor: Leon Dario Arango
         Yennifer Vanessa Serna 
*/
@Injectable()
export class FavoritosService {

  correo: String = '';
  idEvento: number = 0;

  constructor(private http: Http, public servicios: RegistroService) {
    this.correo = servicios.correo;

  }

  favoritos(correo):Observable<any>{
    return this.http.get('http://localhost:8080/UscoresWS/us/Favoritos?correo='+correo).map( Response => {return Response.text()});
  }

  agregarFavorito(evento: Evento):Observable<any> {
    const obj ={
      correo : this.correo,
      idEvento: this.idEvento
    }

    return this.http.post('http://localhost:8080/UscoresWS/us/Favoritos?correo='+this.correo+'&idEvento='+evento.id,obj).map( Response => {
      this.idEvento = evento.id;
      return Response.text();
    });
  }

  borrarFavorito(evento: Evento):Observable<any> {
    this.correo = this.servicios.correo;
    console.log(this.correo);
    return this.http.delete('http://localhost:8080/UscoresWS/us/Favoritos?correo='+this.correo+'&idEvento='+evento.id).map( Response => {
      this.idEvento = evento.id;
      return Response.text();
    });
  }


}
