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

  title = 'LFG';

  currentRoute:string = "";

  routeHome:boolean = false;

  asideData:string = "";

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

    if (window.location.href === 'http://localhost:4200/amigos'){
      this.asideData = "DATOS AMIGOS"
    }

    else if (window.location.href === 'http://localhost:4200/grupos') {
      this.asideData = "DATOS GRUPOS";
    }

    else {
      this.asideData = "xd";
    }


  }

  ngOnInit(): void {

    console.log(window.location.href);
    console.log("Ruta " + this.routeHome);
    this.checkLocation();
  }

}
