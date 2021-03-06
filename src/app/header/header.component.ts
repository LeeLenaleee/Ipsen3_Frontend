import {AfterContentChecked, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  constructor() { }

  header = false;

  ngOnInit() {
  }

  ngAfterContentChecked(): void {
    const user = sessionStorage.getItem('currentUser');
    this.header = user != null;
  }
}
