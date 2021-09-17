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
  imgUrl: string='';
  nombreUsuarioActual:string = 'testUser';
  isLoggedIn:boolean = false;
  rutaActual:string = "";

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

  removeEnd(str:string): string{
    return str.substring(str.length-5);
  }

  concat(str:string): string{
    return str.concat("{TESTT}");
  }

  

  ngOnInit(): void {

    //console.log("Url actual: " + window.location.href);
    //console.log("Ruta actual: " + this.router.url);
    console.log("¿Estamos en la home? " + this.isHomePage());
    //console.log("Ruta comp: " + window.location.origin+"/mensajes");

    this.isLoggedIn = !!this.fetchService.obtenerToken();

    if (this.isLoggedIn) {
      const user = this.fetchService.obtenerUsuarioToken();
      this.nombreUsuarioActual = user.username;
      console.log("username tokn: " + this.nombreUsuarioActual)
    }

    // this.twitchFetchService.enviarDatos().subscribe(
    //   result=>{
    //     console.log(result);
    //   }
    // )



  }
}


