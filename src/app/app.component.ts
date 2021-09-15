import { Component, OnInit } from '@angular/core';
import { FetchService } from './fetch.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TwitchFetchService } from './twitch-fetch.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'LFG';
  nombreUsuarioActual:string = 'testUser';
  isLoggedIn:boolean = false;
  rutaActual:string = "";
  tituloAsideData:string = "";
  asideData:string = "";

  twitchData:any;
  arrayData:Array<any> = new Array();
  twitchDataArray:Array<any> = new Array();

  asideMensajes:string = "Puedes enviar mensajes a tus contactos para organizar grupos o charlar. Gestiona tus mensajes o inicia una conversación."

  constructor(
    private fetchService:FetchService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private twitchFetchService:TwitchFetchService
    ){}

  isHomePage(): boolean{

    if (window.location.href === window.location.origin+'/inicio' || window.location.href === window.location.origin+'/'){
      return true;
    }

    else{
      return false;
    }

  }

  checkLocation(){

    // TODO: Cambia títulos, modificar y fusionar con los components

    if (window.location.href === window.location.origin+'/amigos'){
      this.asideData = "Gestionar amigos"
    }

    else if (window.location.href === window.location.origin+'/grupos') {
      this.asideData = "Gestionar grupos";
    }

    
    else if (window.location.href === window.location.origin+'/mensajes') {
      this.asideData = this.asideMensajes;
      this.tituloAsideData = "Mensajería"
    }

    else {
      this.asideData = "Aside";
    }


  }

  ngOnInit(): void {

    console.log("Url actual: " + window.location.href);
    console.log("Ruta actual: " + this.router.url);
    console.log("¿Estamos en la home? " + this.isHomePage());
    console.log("Ruta comp: " + window.location.origin+"/mensajes");
    this.checkLocation();

    this.isLoggedIn = !!this.fetchService.obtenerToken();

    if (this.isLoggedIn) {
      const user = this.fetchService.obtenerUsuarioToken();
      this.nombreUsuarioActual = user.username;
    }

    // this.twitchFetchService.enviarDatos().subscribe(
    //   result=>{
    //     console.log(result);
    //   }
    // )

    this.twitchFetchService.obtenerDatos("juegos").subscribe(
        result => {
          console.log(result);
          this.twitchData = result;
          this.arrayData = this.twitchData;
          console.log("MI ARRAYDATA: " + this.arrayData)
          //this.twitchDataArray = this.twitchData.value;
          console.log(this.twitchData);
          return result;
        },
        error => {
          console.log("Problemas...");
        }
      )

    }


  }


