import {Component, Input, OnInit} from '@angular/core';
import {Dog} from '../../../modules/dog.module';

@Component({
  selector: 'app-dog-item',
  templateUrl: './dog-item.component.html',
  styleUrls: ['./dog-item.component.css']
})
export class DogItemComponent implements OnInit {

  @Input() dogElement: Dog;
  constructor() { }

  ngOnInit() {
  }

}
