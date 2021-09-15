import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  titulo:string = 'Grupos';
  desc:string = 'Crea un grupo para jugar o gestiona tus grupos';

  opcionElegida: number = 1;

  misGrupos(){
    this.opcionElegida = 1;
  }

  verGrupos(){
    this.opcionElegida = 2;
  }

  buscarGrupo(){
    this.opcionElegida = 2;
  }

  constructor(){}

  ngOnInit(){

  }

}
