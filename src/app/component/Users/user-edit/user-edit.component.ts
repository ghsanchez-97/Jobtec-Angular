import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { global } from '../../../services/global';
import { UserService } from '../../../services/user.service';
import { Router,ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService]
})
export class UserEditComponent implements OnInit {

  alertMessage
  errorMessage
  token
  user : User
  url

  constructor(
    private userServices:UserService, private router:Router,private route:ActivatedRoute
  ) { 
    this.token = this.userServices.getToken()
    this.url = global.url
    this.user = new User('','','','','','','','')
  }

  ngOnInit(): void {
    this.getUser();
  }
  onSubmitRg(){
    console.log(this.user);
    
    this.route.params.forEach((params:Params) =>{
      let id = params['id'];
      this.userServices.updateUser(this.user, this.token, id).subscribe(
        (res:any)=>{
          let user = res['user'];
          this.user = user
          
          if(!user){
            this.alertMessage = 'Error al Actualizar'
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
    })
    
  }

  getUser(){
    this.route.params.forEach((params : Params) =>{
      var id = params['id'];

      this.userServices.getUser(this.token, id).subscribe(
        (res:any) =>{
          this.user = !res ? [] : res.user;
  
          if(!this.user){
            this.router.navigate(['/users-list']);
          }e =>{
            var errorMessage = <any>e;

            if(errorMessage != null){
              var body = JSON.parse(e.body);
              console.log(body)
            }
          }
        }
      )
    })

  }

}