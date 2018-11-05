import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Usuario } from '../../Entidades/usuario';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

/*Autor: Leon Dario Arango
         Yennifer Vanessa Serna 
*/
@Injectable()
export class RegistroService {
  correo: String = '';
  contrasena: String = '';
  nombre: String = '';
  constructor(private http: Http) {
  }
  
  login(correo: String, contrasena: String): Observable<any> {
    return this.http.get('http://localhost:8080/UscoresWS/us/Usuario?correo=' +
      correo + '&contrasena=' + contrasena).map( Response => {
        this.correo = correo;
        this.contrasena = contrasena;
        this.nombre = Response.text();
        return Response.text();
      });
  }

  registro(correo: String,nombre: String, contrasena: String):Observable<any> {
    const obj ={
      correo : this.correo,
      nombre : this.nombre,
      contrasena : this.contrasena
    }
    
    return this.http.post('http://localhost:8080/UscoresWS/us/Usuario?correo=' +
    correo +'&nombre='+nombre+'&contrasena=' + contrasena,obj).map( Response => {
      this.correo = correo;
      this.contrasena = contrasena;
      this.nombre = nombre;
      return Response.text();
    });
  }

}

