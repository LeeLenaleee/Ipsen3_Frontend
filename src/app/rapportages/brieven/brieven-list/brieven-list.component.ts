import { Component, OnInit } from '@angular/core';
import {Brieven} from '../../../models/brieven.model';
import {BrievenService} from '../brieven.service';

@Component({
  selector: 'app-brieven-list',
  templateUrl: './brieven-list.component.html',
  styleUrls: ['./brieven-list.component.css']
})
export class BrievenListComponent implements OnInit {
  brieven: Brieven[];

  constructor(private brievenService: BrievenService) {
  }

  ngOnInit() {
    this.brievenService.getBrieven();
    this.brievenService.brievenEmitter
      .subscribe(
        (brieven: Brieven[]) => {
          this.brieven = brieven;
        }
      );
  }
}
