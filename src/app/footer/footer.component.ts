import {AfterContentChecked, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterContentChecked {

  constructor() { }
  footer = false;
  ngOnInit() {
  }

  ngAfterContentChecked(): void {
    const user = sessionStorage.getItem('currentUser');
    this.footer = user != null;
  }

}
