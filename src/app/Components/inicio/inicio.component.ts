import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { delay } from 'q';

/*Autor: Leon Dario Arango
         Yennifer Vanessa Serna 
*/
declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true,
      duration: 250,
      autoplay: true,
      padding: 200,

    });
    setInterval(function () {
      $('.carousel').carousel('next');
    }, 4000);

  }
}
