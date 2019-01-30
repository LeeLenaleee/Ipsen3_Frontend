import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-weergave-filter',
  templateUrl: './weergave-filter.component.html',
  styleUrls: ['./weergave-filter.component.css']
})
export class WeergaveFilterComponent implements OnInit {

  @Input() kwartaal: string;
  @Output() kwartaalChange = new EventEmitter();
  @Input() inputJaar: string;
  @Output() inputJaarChange = new EventEmitter();
  @Input() kwartaalSwitchStatus;
  @Output() kwartaalSwitchStatusChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
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
