import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MisTorneos } from '../../Entidades/misTorneos';
import {  } from 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

/*Autor: Leon Dario Arango
         Yennifer Vanessa Serna 
*/
@Injectable()
export class MisTorneosService {

  constructor(private http: Http) {
  }

  misTorneos(correo):Observable<any>{
    return this.http.get('http://localhost:8080/UscoresWS/us/MisTorneos?correo='+correo).map( Response => {return Response.text()});
    
  }

}
