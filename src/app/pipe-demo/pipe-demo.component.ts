import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  futureData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("here data..")
    },2000)
  })
 contact_no=9844455555;

 filteredStatus = "";

 todos = [{
   label : "Some Work",
   status : 'done'
 },{
   label : "Some Work",
   status : 'pending'
 },{
   label : "Some Work",
   status : 'done'
 },{
   label : "Some Work",
   status : 'pending'
 }]

 addTodo(){
   this.todos.push({
     'label' :"New Work",
     'status' : "pending"
   })
 }
  constructor() { }

  ngOnInit() {
  }

}
