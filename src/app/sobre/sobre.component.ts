import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  titulo:string = "Sobre LFG";

  constructor() { }

  ngOnInit(): void {
  }

}
