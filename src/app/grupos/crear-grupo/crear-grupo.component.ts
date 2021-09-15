import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FetchService } from '../../fetch.service';

@Component({
  selector: 'app-crear-grupo',
  templateUrl: './crear-grupo.component.html',
  styleUrls: ['./crear-grupo.component.css']
})
export class CrearGrupoComponent implements OnInit {

  isLoggedIn:boolean = false;
  outputForm:FormGroup;
  login:string = '';
  pass:string = '';
  juego:number = 0;

  constructor(private formBuilder: FormBuilder, private fetchService: FetchService) {   
    this.outputForm = formBuilder.group(
    {
      'nombre' : [null],
      'creador': [null],
      'juego': [null]
    }
  );
}

  submitForm(){
    console.log(JSON.stringify(this.outputForm.value));
    this.fetchService.enviarDatos('grupos', JSON.stringify(this.outputForm.value));
  }

  ngOnInit(): void {
  }

}
