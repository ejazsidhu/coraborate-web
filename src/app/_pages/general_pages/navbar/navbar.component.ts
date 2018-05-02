import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { IClassesViews } from '../../../_models/ClassesViews';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ClassView: IClassesViews;
  constructor(private ns: NavbarService) { }

  ngOnInit() {
    console.log("imalive")
    this.GetAllClassesFun();


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
