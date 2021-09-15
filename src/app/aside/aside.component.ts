import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TwitchFetchService } from '../twitch-fetch.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  tituloAsideData:string = "";
  asideData:string = "";

  twitchData:any;
  arrayData:Array<any> = new Array();
  twitchDataArray:Array<any> = new Array();

  twitchStreamsArray:Array<any> = new Array();

  asideMensajes:string = "Puedes enviar mensajes a tus contactos para organizar grupos o charlar. Gestiona tus mensajes o inicia una conversación."

  constructor(
    private twitchFetchService:TwitchFetchService
    ){}

  ngOnInit(): void {

    this.twitchFetchService.obtenerDatos("juegos").subscribe(
      data => {
        console.log(data);
        this.twitchData = data;
        this.arrayData = Object.keys(this.twitchData).map(key => ({type: key, value: this.twitchData[key]}));
        this.twitchDataArray = this.arrayData[0].value;
        //this.twitchDataArray = this.twitchData.value;
        return data;
      },
      error => {
        console.log("Problemas...");
      }
    )

    this.twitchFetchService.obtenerDatos("streams").subscribe(
      data => {
        console.log(data);
        let localData:any = data;
        let arrayData = Object.keys(localData).map(key => ({type: key, value: localData[key]}));
        this.twitchStreamsArray = arrayData[0].value;
        //this.twitchDataArray = this.twitchData.value;S
        return data;
      },
      error => {
        console.log("Problemas...");
      }
    )




  }

  }

