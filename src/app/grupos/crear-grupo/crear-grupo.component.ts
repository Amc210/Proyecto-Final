import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FetchService } from '../../fetch.service';

@Component({
  selector: 'app-crear-grupo',
  templateUrl: './crear-grupo.component.html',
  styleUrls: ['./crear-grupo.component.css']
})
export class CrearGrupoComponent implements OnInit {

  outputForm:FormGroup;
  usuario:string = "TestUsuario";
  juego:number = 0;
  juegos:any;
  arrayJuegos:Array<any> = new Array();
  data:any;
  seleccionado:any;

  constructor(private formBuilder: FormBuilder, private fetchService: FetchService) {   
    this.outputForm = formBuilder.group(
    {
      'nombre' : [null],
      'creador': 1,
      'juego': [null],
      'tipo':[null],
      'descripcion':[null]
    }
  );
}

submitForm(){
  console.log(this.outputForm.value);
  this.fetchService.enviarDatos("grupos", this.outputForm.value).subscribe(
    data => {
      console.log(data);
      this.data = data;
    },
    error => {
      console.log("Problemas...");
    });
}

  ngOnInit(): void {

    this.fetchService.obtenerDatos("juegos").subscribe(
      result => {
        console.log("Resultado juegos: " + result);
        this.juegos = result;
        //this.arrayJuegos = Object.keys(this.juegos).map(key => ({type: key, value: this.juegos[key]}));
        //console.log("Salida juegos: " + this.juegos);
        return result;
      },
      error => {
        console.log("Problemas...");
      }
    )

  }

}
