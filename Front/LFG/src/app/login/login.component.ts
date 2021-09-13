import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FetchService } from '../fetch.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn:boolean = false;
  outputForm:FormGroup;
  login:string = '';
  pass:string = '';
  authToken:string = '';

  constructor(private formBuilder: FormBuilder, private fetchService: FetchService) { 
    this.outputForm = formBuilder.group(
      {
        'login' : [null],
        'pass': [null]
      }
    );
  }

  submitForm(){
    console.log(JSON.stringify(this.outputForm.value));
    this.fetchService.autorizar((JSON.stringify(this.outputForm.value.user)), JSON.stringify(this.outputForm.value.password));
  }

  onSubmit(){
    this.outputForm = this.formBuilder.group({

    })
  }

  ngOnInit(): void {

  //   this.fetchService.enviarDatos('login', JSON.stringify(this.outputForm.value)).subscribe(
  //     data => 
  //   )
  // }

  }

}
