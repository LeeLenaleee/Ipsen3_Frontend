import { Component, OnInit } from '@angular/core';
import { InstellingenService } from '../instellingen.Service';
import { Kostenpost } from '../../models/kostenpost.model';

@Component({
  selector: 'app-kostenpost-list',
  templateUrl: './kostenpost-list.component.html',
  styleUrls: ['./kostenpost-list.component.css']
})
export class KostenpostListComponent implements OnInit {
  kostenposten: Kostenpost[] = [];
  kostenpost = '';

  constructor(private instellingenService: InstellingenService) { }

  voegToe() {
    const post = new Kostenpost(null, this.kostenpost);
    this.instellingenService.postKostenPost(post).subscribe(
      () => {
        alert('Kostenpost toegevoegd');
        this.instellingenService.getKostenPosten().subscribe(
          (kostenposten: Kostenpost[]) => {
            this.kostenposten = kostenposten;
          }
        );
      }
    );
    this.kostenpost = '';
  }
  ngOnInit() {
    this.instellingenService.getKostenPosten().subscribe(
      (kostenposten: Kostenpost[]) => {
        this.kostenposten = kostenposten;
      }
    );
  }

  setKostenposten(list: Kostenpost[]) {
    this.kostenposten = list;
  }
}
