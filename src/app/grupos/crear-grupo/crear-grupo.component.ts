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
  juegos:any;
  juegosId:Array<number> = new Array();
  arrayJuegos:Array<any> = new Array();
  data:any;
  seleccionado:any;
  respuestaError:boolean = false;

  datosCargados:boolean = false;

  constructor(private formBuilder: FormBuilder, private fetchService: FetchService) {   
    this.outputForm = formBuilder.group(
    {
      'nombre' : [null],
      'creador': 1,
      'tipo':[null],
      'descripcion':[null],
      'id_juego': [null]
    }
  );
}

submitForm(){
  console.log(this.outputForm.value);
  this.fetchService.enviarDatos("grupos", this.outputForm.value).subscribe(
    data => {
      console.log(data);
      this.data = data;
      this.datosCargados = true;
      console.log(this.datosCargados);
    },
    error => {
      console.log("Problemas...");
    });
}

modInt(a:string): number{
  return parseInt(a);
}

ngOnInit(): void {

    this.fetchService.obtenerDatos("juegos").subscribe(
      result => {
        console.log("Resultado juegos: " + result);
        this.juegos = result;
        for (let a:number = 0; a < this.juegos.length; a++){
          this.juegosId.push(this.juegos[a].id);
        }
        console.log("Valor: " + this.juegosId[4]);

        //this.arrayJuegos = Object.keys(this.juegos).map(key => ({type: key, value: this.juegos[key]}));
        //console.log("Salida juegos: " + this.juegos);
        return result;
      },
      error => {
        return this.respuestaError = true;
        console.log("Problemas...");

      }
    )

  }

}
