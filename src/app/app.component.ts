import {Component, OnInit} from '@angular/core';
import { Testservice } from './Testservice';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  UrlLeague = 'http://ip-api.com/json/208.80.152.201';
  url2 = 'http://localhost:8080/api';
  constructor(private http: HttpClient ) {
    // this.svc.printToConsole('Service recieved');
  }

  ngOnInit() {
    const obs = this.http.get(this.url2);
    obs.subscribe((response) => console.log(response));
  }
}
