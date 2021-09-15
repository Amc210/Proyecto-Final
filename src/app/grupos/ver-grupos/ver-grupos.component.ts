import { Component, OnInit } from '@angular/core';
import { FetchService } from '../../fetch.service';

@Component({
  selector: 'app-ver-grupos',
  templateUrl: './ver-grupos.component.html',
  styleUrls: ['./ver-grupos.component.css']
})
export class VerGruposComponent implements OnInit {


  listaGrupos:any;
  arrayGrupos:Array<any> = new Array();
  grupos:any;

  constructor(private fetchService:FetchService) { }

  ngOnInit(): void {

    this.fetchService.obtenerDatos("grupos").subscribe(
      result => {
        this.grupos = result;
        this.listaGrupos = Object.keys(this.grupos).map(key => ({type: key, value: this.grupos[key]}));
        this.arrayGrupos = this.arrayGrupos[1].value;
        console.log(this.grupos);
        return this.arrayGrupos;
      },
      error => {
        console.log("Problemas...");
      }
    )

  }


}
