import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { EmailValidator } from '../../../../assets/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group(
      {

        userName: ['', Validators.compose([Validators.required, EmailValidator.validate, Validators.minLength(4)])],
        password: ['', Validators.required]

      });

  }

  ngOnInit() {
  }

  onSubmit(form){

    console.log(form);
  }

}
