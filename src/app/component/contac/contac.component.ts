import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contac',
  templateUrl: './contac.component.html',
  styleUrls: ['./contac.component.css']
})
export class ContacComponent implements OnInit {

  apiLoaded: Observable<boolean>;
  center: google.maps.LatLngLiteral = {lat: 11.962624573513855,lng: -86.08808952609357};
  zoom: 16

  constructor() {
   }

  ngOnInit(): void {
    
  }
  

}
