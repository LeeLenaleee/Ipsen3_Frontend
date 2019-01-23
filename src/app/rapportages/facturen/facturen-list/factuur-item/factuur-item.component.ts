import {Component, Input, OnInit} from '@angular/core';
import {FactuurModel} from '../../../../models/factuur.model';
import {FacturenService} from '../../facturen.service';

@Component({
  selector: 'app-factuur-item',
  templateUrl: './factuur-item.component.html',
  styleUrls: ['./factuur-item.component.css']
})
export class FactuurItemComponent implements OnInit {
  @Input() factuur: FactuurModel;
  @Input() index: number;

  constructor(factuurService: FacturenService) { }

  ngOnInit() {
  }

}
