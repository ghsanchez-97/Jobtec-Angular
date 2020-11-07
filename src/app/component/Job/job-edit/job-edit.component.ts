import { Component, OnInit } from '@angular/core';
import { Agent } from '../../../models/agent';
import { global } from '../../../services/global';
import { UserService } from '../../../services/user.service';
import { AgentService } from '../../../services/agent.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css'],
  providers: [UserService, AgentService]
})
export class JobEditComponent implements OnInit {

  token
  agent: Agent
  url
  errorMessage
  alertMessage

  constructor(
    private userServices: UserService, 
    private agentService: AgentService, 
    private router: Router,
    private route: ActivatedRoute, 
    ) {
      this.token = this.userServices.getToken()
      this.url = global.url
      this.agent = new Agent('','','','','','','',null,'')
  }

  ngOnInit(): void {
    this.getAgent()
  }
  onSubmitJb(){
    console.log(this.agent);

    this.route.params.forEach((params: Params) =>{
      let id = params['id'];

      this.agentService.editAgent(this.token, this.agent, id).subscribe(
        res =>{
          if(!this.agent){
            this.alertMessage = 'Error al Registrar'
          }
          this.router.navigateByUrl('/jobs')
        },e =>{
          let errorMessage = <any>e
          if(errorMessage != null){
            console.log(e);
            
          }
        }
      )
    })
    
  }

  getAgent(){
    this.route.params.forEach((params: Params) =>{
      let id = params['id'];
      
      this.agentService.getAgent(this.token, id).subscribe(
        (res:any) =>{
          this.agent = !res ? [] : res.agent;

          if(!this.agent){
            this.router.navigate(['/event'])
          }
        },e => {
          var errorMessage = <any>e;
          if(errorMessage != null){
            console.log(e);
          }
        }
      )
    });

  }

}

