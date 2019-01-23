import {Component, Input, OnInit} from '@angular/core';
import {Brieven} from '../../../../models/brieven.model';

@Component({
  selector: 'app-brieven-item',
  templateUrl: './brieven-item.component.html',
  styleUrls: ['./brieven-item.component.css']
})
export class BrievenItemComponent implements OnInit {
  @Input() brieven: Brieven;
  @Input() index: number;

  constructor() {
  }

  ngOnInit() {
  }
}
