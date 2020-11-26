import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service'
import { User } from '../../models/user'

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
  providers: [UserService]
})
export class SignComponent implements OnInit {
  
  use: User;
  identity;
  token;
  errorMessage;
  user: SocialUser;
  loggedIn: boolean;

  constructor(
    private authService: SocialAuthService,
    private router:Router,
    private userService: UserService
  ) { 
    this.use = new User('','','','','','','','');
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  } 
  signInWithMail(): void{
    alert(this.userService.singup(this.use))
    
  }
 
  // signOut(): void {
  //   this.authService.signOut();
  // }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      if(user != null){
        this.user = user;
        this.loggedIn = (user != null);
        this.router.navigateByUrl('/user')
      }else{
        
        console.log('Error al iniciar');
      }
      
    });
    
  }

}
