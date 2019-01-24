import { Component, OnInit, Input} from '@angular/core';
import { Kostenpost } from '../kostenpost.model';
import { InstellingenService } from '../../instellingen.Service';

@Component({
  selector: 'app-kostenpost-item',
  templateUrl: './kostenpost-item.component.html',
  styleUrls: ['./kostenpost-item.component.css']
})
export class KostenpostItemComponent implements OnInit {
  @Input() kostenposten: Kostenpost;
  @Input() index: number;

  constructor(private instellingenService: InstellingenService) { }

  ngOnInit() {
  }

}
