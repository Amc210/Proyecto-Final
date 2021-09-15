import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FetchService } from 'src/app/fetch.service';

@Component({
  selector: 'app-buscar-grupo',
  templateUrl: './buscar-grupo.component.html',
  styleUrls: ['./buscar-grupo.component.css']
})
export class BuscarGrupoComponent implements OnInit {

  payload:any;
  arrayPayload:Array<any> = new Array();
  arrayFinal:Array<any> = new Array();

  constructor(private fetchService:FetchService) { }

  ngOnInit(): void {

    this.fetchService.obtenerDatos("juegos").subscribe(
      data => {
        console.log(data);
        this.payload = data;
        this.arrayPayload = Object.keys(this.payload).map(key => ({type: key, value: this.payload[key]}));
        this.arrayFinal = this.arrayPayload[0].value;
        //this.twitchDataArray = this.twitchData.value;
        return data;
      },
      error => {
        console.log("Problemas...");
      }
    )


  }

}
