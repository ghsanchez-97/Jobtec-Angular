import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-adm',
  templateUrl: './login-adm.component.html',
  styleUrls: ['./login-adm.component.css'],
  providers: [UserService]
})
export class LoginAdmComponent implements OnInit {

  user:User
  identity
  token
  errorMessage

  LoginFormControl = new FormControl('', [
    Validators.required,
  ]);


  constructor(private userService:UserService, private router:Router) { 
    this.user = new User('','','','','','','','')
  }

  onSubmit(){
    this.userService.singup(this.user).subscribe(
      res =>{
        const identity = res['user']
        this.identity = identity
        console.log(identity);
        if(this.identity.id != null){
          alert('El usuario no esta coorectamente identificado')
        }

        this.userService.singup(this.user,'true').subscribe(
          res =>{
            const token = res ['token']
            this.token = token
            // this.router.navigateByUrl('/gtec')
            if(this.token.length < 1){
              alert('El token no se ha generado correctamente')
            }else{
              localStorage.setItem('token', token)
            }
          },e =>{
            const errorMessage = <any>e
            if(errorMessage != null){
              this.errorMessage = e.error.message;
            }
          }
        )
      },e =>{
        const errorMessage = <any>e
        if(errorMessage != null){
          this.errorMessage = e.error.message
        }
      }
    )
  }

  ngOnInit(): void {
    this.identity = this.userService.getIdentity()
    this.token = this.userService.getToken()
  }

}
