import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Agent } from '../../models/agent'
import { UserService } from '../../services/user.service';
import { AgentService } from '../../services/agent.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
  providers:[UserService, AgentService]
})
export class ViewUserComponent implements OnInit {

  agent : Agent
  user: SocialUser;
  loggedIn: boolean;
  p: number = 1;
  confirm;

  constructor(
    private authService: SocialAuthService, 
    private router: Router,
    private userService: UserService,
    private agentService: AgentService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.getAgents();
      console.log(this.getAgents());
    });
  }

  signOut(): void {
    this.authService.signOut();
    this.router.navigateByUrl('');
  }

  getAgents(){
    this.route.params.forEach((params: Params) =>{
      let page = +params['page']

      this.agentService.getAgentsPublic(page).subscribe(
        (res:any) =>{
          this.agent = !res ? [] : res.agent
          console.log(this.agent);
          
  
          if(!this.agent){
            this.router.navigateByUrl('');
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

}
