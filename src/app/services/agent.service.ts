import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { global } from '../services/global';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  url;

  constructor(private http: HttpClient) { 
    this.url = global.url;
  }
  addAgent(token, agent){
    let params = JSON.stringify(agent);
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': token
    });
    return this.http.post(this.url+'newAgent', params, {headers:headers});

  }

  editAgent(token, id, nw){
    let params = JSON.stringify(nw);
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : token
    });

    return this.http.put(this.url+'updateAgent/'+id, params, {headers:headers});
  }

  delAgent(token, id){
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : token
    });

    return this.http.delete(this.url+'deleteAgent/'+id, {headers:headers});
  }

  getAgents(token, page){
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : token
    });

    return this.http.get(this.url+'getsAgents/'+page, {headers : headers});
  }

  getAgentsPublic(page){
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    
    return this.http.get(this.url+'getsAgentsPublic/'+page, {headers : headers});
  }

  getAgent(token, id){
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : token
    });

    return this.http.get(this.url+'getAgent/'+id, {headers : headers});
  }

  getAgentPublic(name){
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });

    return this.http.get(this.url+'getAgentPublic/'+name, {headers : headers});
  }
}
