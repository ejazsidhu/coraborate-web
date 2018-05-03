import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { IClassesViews } from '../../../_models/ClassesViews';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show: any=true;
  showToastTrigger=false;
  ClassView: IClassesViews;
  constructor(private ns: NavbarService) { }

  ngOnInit() {
    // console.log("imalive")
    // this.GetAllClassesFun();


  }

  showToast(){
this.showToastTrigger=!this.showToastTrigger;
  }

  GetAllClassesFun() {

    this.ns.GetOwnedClasses().subscribe(data => {
     
      this.ClassView = data;
      console.log(this.ClassView);
      // console.log(this.ClassView.JoinClassess);
      // console.log(this.ClassView.OwnClassess);
    },
      error => {

        console.log("error body");


        console.log(error);
      });

  }

  toggleHeading(){

    this.show=!this.show;
  }

//    myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

showHeading(e){

  console.log('mouser enter')
  console.log(e)
  var x = document.getElementById("meaageDiv");
  if (x.style.display === "none") {
      x.style.display = "block";
      x.innerHTML=e
  } else {
      x.style.display = "none";
      
  }

}

}
