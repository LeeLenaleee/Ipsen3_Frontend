import {AfterContentChecked, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  constructor() { }

  private header = false;

  ngOnInit() {
  }

  ngAfterContentChecked(): void {
    const user = localStorage.getItem('currentUser');
    this.header = user != null;
  }
}
