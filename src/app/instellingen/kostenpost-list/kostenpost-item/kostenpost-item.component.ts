import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Kostenpost } from '../../../models/kostenpost.model';
import { InstellingenService } from '../../instellingen.Service';

@Component({
  selector: 'app-kostenpost-item',
  templateUrl: './kostenpost-item.component.html',
  styleUrls: ['./kostenpost-item.component.css']
})
export class KostenpostItemComponent implements OnInit {
  @Input() kostenposten: Kostenpost;
  @Input() index: number;
  @Output() kostenpostenList = new EventEmitter<Kostenpost[]>();
  constructor(private instellingenService: InstellingenService) { }

  ngOnInit() {

  }

  deleteRequest() {
    if (confirm('Weet u het zeker?')) {
      this.instellingenService.deleteKostenpost(this.kostenposten.id)
        .subscribe(
          () => {
            this.instellingenService.getKostenPosten().subscribe(
              (kostenposten: Kostenpost[]) => {
                this.kostenpostenList.emit(kostenposten);
              }
            );
            alert('Kostenpost verwijderd');
          }
        );
    }
  }

}
