import { Component, OnInit, ViewChild} from '@angular/core';
import { InstellingenService } from './instellingen.Service';
import { Kostenpost } from '../models/kostenpost.model';
import { KostenpostListComponent } from './kostenpost-list/kostenpost-list.component';

@Component({
  selector: 'app-instellingen',
  templateUrl: './instellingen.component.html',
  styleUrls: ['./instellingen.component.css']
})
export class InstellingenComponent implements OnInit {
  kostenposten: Kostenpost[];
  @ViewChild(KostenpostListComponent) kostenpostenListComponent: KostenpostListComponent;
  constructor(private instellingenService: InstellingenService) {}

  ngOnInit() {
    // this.instellingenService.kostenPostGezocht
    //   .subscribe(
    //     (kostenpost: Kostenpost) => {
    //       console.log(kostenpost)
    //       this.kostenposten.push(kostenpost)
    //     }, error => {
    //       console.log(error);
    //     }
    // );

  }

}
