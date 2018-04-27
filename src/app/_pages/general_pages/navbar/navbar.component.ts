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

}
