import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { EmailValidator } from '../../../../assets/validators';
import { ConfigService } from '../../../_services/config/config.service';
// import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  image="assets/images/logo.png";

  public loginForm: FormGroup;
  constructor(private fb: FormBuilder,private cs:ConfigService) {
    // this.image="/src/assets/images/logo.png";
    this.loginForm = this.fb.group(
      {

        userName: ['', Validators.compose([Validators.required, EmailValidator.validate, Validators.minLength(4)])],
        password: ['', Validators.compose([Validators.required])]

      });

  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
// debugger;
    this.cs.getUser().subscribe(d=>{
      console.log("data body");
      console.log(d)
    },
    er=>{
      console.log("error body")
      console.log(er)
    })
  }

  onSubmit(form){

    console.log(form);
  }

}
