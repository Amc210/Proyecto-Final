import { Component, OnInit } from '@angular/core';
import { FetchService } from '../../fetch.service';

@Component({
  selector: 'app-ver-grupos',
  templateUrl: './ver-grupos.component.html',
  styleUrls: ['./ver-grupos.component.css']
})
export class VerGruposComponent implements OnInit {

  grupos:any;
  getData:any;
  arrayData:Array<any> = new Array();
  tipo:number=0;

  constructor(private fetchService:FetchService) { }

  ngOnInit(): void {

    this.fetchService.obtenerDatos("grupos").subscribe(
      result => {
        console.log(result);
        this.getData = result;
        //this.tipo = this.getData[0].value.tipo;
        console.log("Getdata: " + this.getData);
        console.log(this.getData[0].tipo);
        this.tipo = this.getData[0].tipo;
        //console.log("tipo: " + this.tipo);
        return result;
      },
      error => {
        console.log("Problemas...");
      }
    )

  }


}
