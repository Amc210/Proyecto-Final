import { Component, OnInit } from '@angular/core';
import { FetchService } from './fetch.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  nombreUsuario:string = '';
  title = 'LFG';
  currentRoute:string = "";
  routeHome:boolean = false;
  isLoggedIn:boolean = false;

  tituloAsideData:string = "";
  asideData:string = "";

  asideMensajes:string = "Puedes enviar mensajes a tus contactos para organizar grupos o charlar. Gestiona tus mensajes o inicia una conversación."

  constructor(private fetchService:FetchService, private router: Router, private activatedRoute: ActivatedRoute){

  }

  checkLogin(): boolean{
    return true;
  }

  isHomePage(): boolean{
    if (window.location.href === 'http://localhost:4200/inicio'){
      return true;
    }

    else{
      return false;
    }

    return false;
  }

  checkLocation(){

    // TODO: Cambia títulos, modificar y fusionar con los components

    if (window.location.href === window.location.origin+'/amigos'){
      this.asideData = "DATOS AMIGOS"
    }

    else if (window.location.href === window.location.origin+'/grupos') {
      this.asideData = "DATOS GRUPOS";
    }

    
    else if (window.location.href === window.location.origin+'/mensajes') {
      this.asideData = this.asideMensajes;
      this.tituloAsideData = "Mensajería"
    }

    else {
      this.asideData = "xd";
    }


  }

  ngOnInit(): void {

    console.log("Url actual: " + window.location.href);
    console.log("Ruta actual: " + this.router.url);
    console.log("¿Estamos en la home? " + this.routeHome);
    console.log("Ruta comp: " + window.location.origin+"/mensajes");
    this.checkLocation();

    this.isLoggedIn = !!this.fetchService.obtenerToken();

    if (this.isLoggedIn) {
      const user = this.fetchService.obtenerUsuarioToken();
      this.nombreUsuario = user.username;
    }


  }

}
