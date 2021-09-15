import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FetchService } from '../../fetch.service';

@Component({
  selector: 'app-add-amigo',
  templateUrl: './add-amigo.component.html',
  styleUrls: ['./add-amigo.component.css']
})
export class AddAmigoComponent implements OnInit {

  outputForm:FormGroup;
  nombreAmigo:string = '';
  exito:boolean = false;
  data:any;

  constructor(private formBuilder: FormBuilder, private fetchService: FetchService) { 
    this.outputForm = formBuilder.group(
      {
        'nombreAmigo' : [null],
      }
    );
  }

  submitForm(){
    console.log(this.outputForm.value);
    this.fetchService.enviarDatos("amigos", this.outputForm.value).subscribe(
      data => {
        console.log(data);
        this.data = data;
      },
      error => {
        console.log("Problemas...");
      });
  }

  onSubmit(){
  }

  ngOnInit(): void {

  //   this.fetchService.enviarDatos('login', JSON.stringify(this.outputForm.value)).subscribe(
  //     data => 
  //   )
  // }

  }

}
