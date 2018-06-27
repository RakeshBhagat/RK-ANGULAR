// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
//   user={
//     firstName:"Bill",
//     lastName:"Agtes",
//     dob:new Date("JAN 12, 1964"),
//     income:500000,
//     isWorking:true,
//     company:"Microsoft",
//     image:"assets/bill.jpg",
//     vote:120
//   }
// }


import { Component } from '@angular/core';
import { USER_DATA } from './data/user-data';
import { User } from './model/user';
import {DataService} from './services/dataservice';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users : User[];

  changeChild(eventdata : any){
    this.title = eventdata;
  }

  constructor(public dataService:DataService){

  }
  ngOnInit(){

firebase.initializeApp({
    apiKey: "AIzaSyB2xLTnNRok5UIXX15FIx-m9O9vjev9mF4",
    authDomain: "sg-rk-project.firebaseapp.com"})

   // this.users=this.dataService.getUserData();
     this.dataService.
                getHttpData().subscribe(data=>this.users = data)

                console.log(this.users);
    ;
  }
}