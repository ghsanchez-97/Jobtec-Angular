import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpResponse } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { global } from './global';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  identity;
  token;
  url: String;

  constructor(private http: HttpClient) {
    this.url = global.url;
  }

  singup(userlogin, gethash = null){

    if(gethash != null){
      userlogin.gethash = gethash;
    }

    const json = JSON.stringify(userlogin);
    const params = json;

    const header = new HttpHeaders({'Content-Type' : 'application/json'});
    return this.http.post(this.url+'login', params, {headers:header});
  }

  register(userRegister, token){
    let params =JSON.stringify(userRegister);
    let header = new HttpHeaders({'Content-Type' : 'application/json',
    'Authorization': token});
    return this.http.post(this.url+'register', params, {headers:header});
  }

  getUsers(token, page){
    const header = new HttpHeaders({'Content-Type' : 'application/json',
    'Authorization' : token});
    return this.http.get(this.url+'getUsers/'+page, {headers:header});
  }

  getUser(token, id){
    const header = new HttpHeaders({'Content-Type' : 'application/json',
    'Authorization' : token});
    return this.http.get(this.url+'getUser/'+id, {headers:header});
  }

  updateUser(user, id, token){
    const params = JSON.stringify(user);
    const header = new HttpHeaders({'Content-Type' : 'application/json',
    'Authorization' : token});
    return this.http.put(this.url+'updateUser/'+id, params, {headers:header});
  }

  deleteUser(token, id){
    const headers = new HttpHeaders({'Content-Type' : 'application/json',
    'Authorization' : token});
    return this.http.delete(this.url+'deleteuser/'+id, {headers:headers});
  }

  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));

    if(identity != 'udefined'){
      this.identity = identity;
    }else{
      this.identity = null
    }
    return this.identity
  }

  getToken(){
    let token = localStorage.getItem("token");

    if(token != 'undefined'){
      this.token = token;
    }else{
      this.token = null
    }
    return this.token;
  }
}
