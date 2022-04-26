import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AvengersService} from './avengers/shared/avengers.service';
@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.component.html',
  styleUrls: ['./avengers.component.css']
})
export class AvengersComponent implements OnInit {

  constructor(private avengersSvc: AvengersService) { }
  allAvengers!: Observable<any>;

  ngOnInit() {
    this.getAvengers();
  }

  getAvengers() {
    this.allAvengers = this.avengersSvc.getAllAvengers();
  }
}
