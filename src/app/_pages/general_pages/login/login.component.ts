import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { EmailValidator } from '../../../../assets/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  image="assets/images/logo.png";

  public loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    // this.image="/src/assets/images/logo.png";
    this.loginForm = this.fb.group(
      {

        userName: ['', Validators.compose([Validators.required, EmailValidator.validate, Validators.minLength(4)])],
        password: ['', Validators.compose([Validators.required])]

      });

  }

  ngOnInit() {
  }

  onSubmit(form){

    console.log(form);
  }

}
