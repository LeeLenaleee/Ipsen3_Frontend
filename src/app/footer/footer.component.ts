import {AfterContentChecked, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterContentChecked {

  constructor() { }
  private footer = false;
  ngOnInit() {
  }

  ngAfterContentChecked(): void {
    const user = localStorage.getItem('currentUser');
    this.footer = user != null;
  }

}
