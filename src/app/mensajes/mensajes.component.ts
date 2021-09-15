import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  titulo:string = "Mensajes";
  desc:string = "";

  opcionElegida: number = 1;

  verContenido(){
    this.opcionElegida = 1;
  }

  addContenido(){
    this.opcionElegida = 2;
  }

  verDetalle(){
    this.opcionElegida = 2;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
