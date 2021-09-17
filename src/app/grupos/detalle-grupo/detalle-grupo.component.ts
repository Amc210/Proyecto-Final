import { Component, OnInit } from '@angular/core';
import { FetchService } from '../../fetch.service';

@Component({
  selector: 'app-detalle-grupo',
  templateUrl: './detalle-grupo.component.html',
  styleUrls: ['./detalle-grupo.component.css']
})

export class DetalleGrupoComponent implements OnInit {

  grupos:any;
  getData:any;
  arrayData:Array<any> = new Array();
  tipo:any;

  constructor(private fetchService:FetchService) { }

  ngOnInit(): void {

    this.fetchService.obtenerDatos("grupos").subscribe(
      result => {
        console.log(result);
        this.getData = result;
        console.log(this.getData);
        return result;
      },
      error => {
        console.log("Problemas...");
      }
    )

  }


}
