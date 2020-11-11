import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { global } from '../../../services/global';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers:[UserService]
})
export class UserListComponent implements OnInit {

  user : User;
  token;
  url:string;
  p: number = 1;
  confirm;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService

  ) {
    this.token = this.userService.getToken();
    this.url = global.url;

   }

  ngOnInit(): void {
    this.getUsers();
    console.log(this.getUsers());
    
  }
  getUsers(){
    this.route.params.forEach((params: Params) =>{
      let page = +params['page']

      this.userService.getUsers(this.token, page).subscribe(
        (res:any) =>{

          let user = res['user'];
          this.user = user
          console.log(this.user);
          
  
          if(!user){
            this.router.navigateByUrl('/users');
          }
        },e => {
          var errorMessage = <any>e;
          if(errorMessage != null){
            console.log(e)
          }
        }
      )
    })  

  }

  onDeleteConfirm(id){
    this.confirm = id;
  }
  onCancelEvent(){
    this.confirm = null;
  }

  onDeleteEvent(id){
    this.userService.deleteUser(this.token, id).subscribe(
      (response:any)=>{
        this.getUsers();
      },e =>{
        let errorMessage = <any>e;
        console.log(errorMessage);
        
      }
    )
  }

}
