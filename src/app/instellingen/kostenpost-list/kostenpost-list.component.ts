import { Component, OnInit, ViewChild } from '@angular/core';
import { InstellingenService } from '../instellingen.Service';
import { Kostenpost } from '../../models/kostenpost.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-kostenpost-list',
  templateUrl: './kostenpost-list.component.html',
  styleUrls: ['./kostenpost-list.component.css']
})
export class KostenpostListComponent implements OnInit {
  kostenposten: Kostenpost[] = [];
  @ViewChild('f') form: NgForm;
  kostenpost = '';

  constructor(private instellingenService: InstellingenService) { }

  voegToe() {
    const post = new Kostenpost(null, this.kostenpost);
    this.instellingenService.postKostenPost(post).subscribe();
    this.instellingenService.getKostenPosten().subscribe(
      (kostenposten: Kostenpost[]) => {
        console.log("THERE SHOULD BE A CHANGE IN THE FREAKING LIST NOW")
        this.kostenposten = kostenposten;
      }
    );
  }
  ngOnInit() {
    this.instellingenService.getKostenPosten().subscribe(
      (kostenposten: Kostenpost[]) => {
        this.kostenposten = kostenposten;
      }
    );
  }
}
