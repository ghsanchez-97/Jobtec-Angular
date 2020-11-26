import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-contac',
  templateUrl: './contac.component.html',
  styleUrls: ['./contac.component.css']
})
export class ContacComponent implements OnInit {

  apiLoaded: Observable<boolean>;
  options: google.maps.MapOptions = {
    center: {lat: 11.962624573513855,lng: -86.08808952609357}, 
    zoom: 16
  };

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAFx2cgDRepFoDkUCLnkwf4TBTq5PRTtF0', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
   }

  ngOnInit(): void {
    
    
  }
  

}
