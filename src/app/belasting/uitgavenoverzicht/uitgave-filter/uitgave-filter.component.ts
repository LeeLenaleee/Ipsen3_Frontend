import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-uitgave-filter',
  templateUrl: './uitgave-filter.component.html',
  styleUrls: ['./uitgave-filter.component.css']
})
export class UitgaveFilterComponent implements OnInit {

  @Input() kwartaal: string;
  @Output() kwartaalChange = new EventEmitter();
  @Input() inputJaar: string;
  @Output() inputJaarChange = new EventEmitter();
  @Input() kostenposten: {naam: string}[] = [];
  @Input() kostenpostSwitchStatus;
  @Output() kostenpostSwitchStatusChange = new EventEmitter();
  @Input() kwartaalSwitchStatus;
  @Output() kwartaalSwitchStatusChange = new EventEmitter();
  @Input() geselecteerdeKostenpost;
  @Output() geselecteerdeKostenpostChange = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onKostenpostClick() {
    this.kostenpostSwitchStatusChange.emit(this.kostenpostSwitchStatus);
  }

  onKostenpostSelect() {
    this.geselecteerdeKostenpostChange.emit(this.geselecteerdeKostenpost);
  }

  onKwartaalClick() {
    this.kwartaalSwitchStatusChange.emit(this.kwartaalSwitchStatus);
  }

  onJaarChange() {
    this.inputJaarChange.emit(this.inputJaar);
  }

  onKwartaalSelect() {
    this.kwartaalChange.emit(this.kwartaal);
  }

}
