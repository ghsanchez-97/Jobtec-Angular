import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt'


@Component({
  selector: 'app-gjt',
  templateUrl: './gjt.component.html',
  styleUrls: ['./gjt.component.css'],
  providers: [UserService]
})
export class GjtComponent implements OnInit {

  token

  constructor(private router: Router) { }

  ngOnInit(): void {
    const hp = new JwtHelperService();
    let key = hp.decodeToken(localStorage.getItem('token'));
    console.log(key);
    this.token = key.name;
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.clear();
    this.token = null;
    this.router.navigateByUrl('/login-adm');
  }

}
