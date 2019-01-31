import {AfterContentChecked, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked {

  constructor() {
  }

  ngAfterContentChecked(): void {
    /*window.onunload = window.onbeforeunload = function () {
      sessionStorage.clear();
    };*/
  }
}
