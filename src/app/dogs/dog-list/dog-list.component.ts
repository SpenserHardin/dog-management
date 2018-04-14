import { Component, OnInit } from '@angular/core';
import {Dog} from '../../modules/dog.module';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  kaTea = new Dog('KaTea', 'Rough Collie', '', '', '', '');
  london = new Dog('London', 'Rough Collie', '', '', '', '');
  dogList: Dog[] = [this.kaTea, this.london];
  constructor() { }

  ngOnInit() {
  }

}
