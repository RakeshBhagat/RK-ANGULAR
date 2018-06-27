import { Component, OnInit } from '@angular/core';

import {FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms'
import{AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username=new FormControl('',[Validators.required,Validators.minLength(6)]);
  password=new FormControl('');
 registerForm:FormGroup;

  constructor(private fb:FormBuilder,private authservice:AuthService) { 
    this.registerForm=this.fb.group({
      username :this.username,
      password :this.password
    })
  }

  ngOnInit() {
  }



  // registerForm : FormGroup;
  register(){
    console.log(this.registerForm);
    this.authservice.resgister(this.registerForm.value.username,
      this.registerForm.value.password);
  }
 


}
