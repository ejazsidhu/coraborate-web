import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../../../../assets/validators/email.validator';


@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {
  public addPeople: FormGroup

  constructor(private fb: FormBuilder) {


    this.addPeople = this.fb.group({
      studentName: ['', Validators.compose([Validators.required, EmailValidator.validate, Validators.minLength(4)])],
      studentCode: ['', Validators.compose([Validators.required, EmailValidator.validate, Validators.minLength(4)])],
      parentName: ['', Validators.compose([Validators.required, EmailValidator.validate, Validators.minLength(4)])],
      parentCode: ['', Validators.compose([Validators.required, EmailValidator.validate, Validators.minLength(4)])],
      classCode: ['', Validators.compose([Validators.required, EmailValidator.validate, Validators.minLength(4)])],
      classCode2: ['', Validators.compose([Validators.required, EmailValidator.validate, Validators.minLength(4)])]

    });
  }

  ngOnInit() {
  }


  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  getRowIndex(m){
    // var newNode = document.createElement("td");
    // var parentDiv = document.getElementById(m);
    // parentDiv.insertBefore(newNode, );
    console.log(m);
    let key='myRow'+m;
    let row=document.getElementById(m);
    // let x=row.insertBefore('<td id="two"><input type="text"  name="studentName" class="input-material " /></td>',-2)
    let x = row.insertAdjacentHTML('beforeend','<td id="two"><input type="text"  name="studentName" class="input-material " /></td>')
   
   
  }
}
