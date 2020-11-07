import { Component, OnInit } from '@angular/core';
import { Agent } from '../../../models/agent';
import { global } from '../../../services/global';
import { UserService } from '../../../services/user.service';
import { AgentService } from '../../../services/agent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-new',
  templateUrl: './job-new.component.html',
  styleUrls: ['./job-new.component.css'],
  providers: [UserService, AgentService]
})
export class JobNewComponent implements OnInit {

  token
  agent: Agent
  url
  errorMessage
  alertMessage

  constructor(
    private userServices: UserService, private agentService:AgentService, private router:Router
  ) {
    this.token = this.userServices.getToken()
    this.url = global.url
    this.agent = new Agent('','','','','','','',null,'')
   }

  ngOnInit(): void {
  }

  onSubmitJb(){
    console.log(this.agent);

    this.agentService.addAgent(this.token, this.agent).subscribe(
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
    
  }

}
