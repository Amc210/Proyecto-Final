import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.css']
})
export class AmigosComponent implements OnInit {

  titulo:string = "Amigos";
  desc:string= "";
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

  this.desc = "Agrega a gente con tus mismos gustos y aficiones, compañeros de equipo con los que has tenido una buena partida o futuros compañeros para nuevos grupos o proyectos."

  }

}
