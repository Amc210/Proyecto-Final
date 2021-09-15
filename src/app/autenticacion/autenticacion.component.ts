import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.css']
})
export class AutenticacionComponent implements OnInit {

  titulo:string = "Entrar";
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
