import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  btnStyle:string = "grupost";
  titulo:string = 'Grupos';
  desc:string = 'Crea un grupo para jugar o gestiona tus grupos';

  opcionElegida: number = 1;

  misGrupos(){
    this.btnStyle = "grupost";
    this.opcionElegida = 1;
  }

  verGrupos(){
    this.opcionElegida = 2;
  }

  buscarGrupo(){
    this.opcionElegida = 3;
  }

  crearGrupo(){
    this.opcionElegida = 4;
  }

  entrarGrupo(){
    this.opcionElegida = 5;
  }

  constructor(){}

  ngOnInit(){
  }

}
