import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.css']
})
export class ToggleSwitchComponent implements OnInit {

  label = '';

  @Input() switchStatus;
  @Output() switchStatusChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleStatus() {
    if (this.switchStatus === false) {
      this.switchStatus = true;
    } else {
      this.switchStatus = false;
    }
    this.switchStatusChange.emit(this.switchStatus);
  }

  setLabel() {

  }

}
