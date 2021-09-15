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
