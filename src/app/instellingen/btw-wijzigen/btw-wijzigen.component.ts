import { Component, OnInit } from '@angular/core';
import {Btw} from '../../models/btw.model';
import {InstellingenService} from '../instellingen.Service';

@Component({
  selector: 'app-btw-wijzigen',
  templateUrl: './btw-wijzigen.component.html',
  styleUrls: ['./btw-wijzigen.component.css']
})
export class BtwWijzigenComponent implements OnInit {
  hoog: number;
  laag: number;

  constructor(private service: InstellingenService) { }

  ngOnInit() {
    // TODO krijg btw
    this.service.getBtw().subscribe(
      (btw: Btw) => {
        this.hoog = btw.btwPercentageHoog;
        this.laag = btw.btwPercentageLaag;
      }
    );
  }

  veranderBtw() {
    const btw = new Btw(1, this.hoog, this.laag);
    this.service.putBtw(btw).subscribe();
    alert('BTW is bijgewerkt!');
  }

}
