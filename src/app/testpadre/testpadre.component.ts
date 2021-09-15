import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpadre',
  templateUrl: './testpadre.component.html',
  styleUrls: ['./testpadre.component.css']
})
export class TestpadreComponent implements OnInit {

  titulo:string = "";
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
