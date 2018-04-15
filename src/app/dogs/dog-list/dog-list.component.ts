import {Component, OnInit} from '@angular/core';
import {Dog} from '../../modules/dog.module';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  kaTea = new Dog('KaTea',
    'Rough Collie',
    'DN48001501',
    '02/01/2016',
    'CH Highcroft St. Germaine Wildfire',
    'CH Highcroft Seaspray');
  london = new Dog('London',
    'Rough Collie',
    'DN47009903',
    '09/05/2016',
    'CH Bannerstone Highcroft Vision',
    'CH Highcroft Seaspray');
  dogList: Dog[] = [this.kaTea, this.london];

  constructor() {
  }

  ngOnInit() {
  }

}
