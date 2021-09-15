import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.css']
})
export class AmigosComponent implements OnInit {

  opcionElegida: number = 1;

  verContenido(){
    this.opcionElegida = 1;
  }

  addContenido(){
    this.opcionElegida = 2;
  }

  verDetalle(){
    this.opcionElegida = 3;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
