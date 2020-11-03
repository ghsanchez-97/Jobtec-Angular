import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../../models/user';
import { global } from '../../../services/global';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css'],
  providers: [UserService]
})
export class UserNewComponent implements OnInit {

  alertMessage
  errorMessage
  token
  user : User
  url


  constructor(
    private userServices:UserService, private router:Router
  ) { 
    this.token = this.userServices.getToken()
    this.url = global.url
    this.user = new User('','','','','','','','')
  }

  ngOnInit(): void {
  }

  onSubmitRg(){
    console.log(this.user);

    this.userServices.register(this.user, this.token).subscribe(
      (res:any)=>{
        this.user
        console.log(User);
        
        if(!this.user){
          this.alertMessage = 'Error al Registar'
        }
        this.router.navigateByUrl('/users')
      },e =>{
        var errorMessage = <any>e;
          if(errorMessage != null){
          //this.errorMessage = e.error.message;
          console.log(e)
          }
      }

    )
    
  }

}
