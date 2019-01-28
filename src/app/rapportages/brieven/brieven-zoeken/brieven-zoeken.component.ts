import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BrievenService} from '../brieven.service';
import {Brieven} from '../../../models/brieven.model';

@Component({
  selector: 'app-brieven-zoeken',
  templateUrl: './brieven-zoeken.component.html',
  styleUrls: ['./brieven-zoeken.component.css']
})
export class BrievenZoekenComponent implements OnInit {

  @ViewChild('inputOmschrijving') omschrijving: ElementRef;

  constructor(private briefService: BrievenService) { }

  ngOnInit() {
  }
  searchOmschrijving() {
    if (this.omschrijving.nativeElement.value !== '') {
      this.briefService.getBriefByPersoon(this.omschrijving.nativeElement.value)
        .subscribe(
          (brief: Brieven[]) => {
            this.briefService.brievenEmitter.emit(brief);
          });
    } else {
      this.briefService.getBrieven();
    }
  }

}
