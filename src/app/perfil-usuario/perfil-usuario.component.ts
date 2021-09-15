import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  outputForm:FormGroup;

  constructor(private formBuilder: FormBuilder, private fetchService: FetchService) { 
    this.outputForm = formBuilder.group(
      {
        'login' : [null],
        'pass': [null]
      }
    );
  }

  submitForm(){}

  ngOnInit(): void {
  }

}
