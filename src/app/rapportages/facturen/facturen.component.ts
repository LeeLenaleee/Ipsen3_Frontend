import {Component, OnInit} from '@angular/core';
import {FactuurModel} from '../../models/factuur.model';
import {FacturenService} from './facturen.service';

@Component({
  selector: 'app-facturen',
  templateUrl: './facturen.component.html',
  styleUrls: ['./facturen.component.css']
})
export class FacturenComponent implements OnInit {
  selectedFactuur: FactuurModel;
  constructor(private factuurService: FacturenService) { }

  ngOnInit() {
    this.factuurService.factuurSelected
      .subscribe(
        (factuur: FactuurModel) => {
          this.selectedFactuur = factuur;
        }
      );
  }
}
