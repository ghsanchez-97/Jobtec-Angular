import { Component, OnInit } from '@angular/core';
import { Agent } from '../../../models/agent'
import { UserService } from '../../../services/user.service';
import { AgentService } from '../../../services/agent.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { global } from '../../../services/global';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
  providers:[UserService, AgentService]
})
export class JobListComponent implements OnInit {
  
  agent : Agent
  token;
  url:string;
  p: number = 1;
  confirm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private agentService: AgentService
  ) { 
    this.token = this.userService.getToken()
    this.url = global.url
  }

  ngOnInit(): void {
    this.getAgents()
  }
  getAgents(){
    this.route.params.forEach((params: Params) =>{
      let page = +params['page']

      this.agentService.getAgents(this.token, page).subscribe(
        res =>{
  
          if(!this.agent){
            this.router.navigateByUrl('/jobs');
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
        this.getAgents();
      },e =>{
        let errorMessage = <any>e;
        console.log(errorMessage);
        
      }
    )
  }

}
