import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ConnectionBackend, Http, RequestOptions} from '@angular/http';


@Component({
  selector: 'app-inloggen',
  templateUrl: './inloggen.component.html',
  styleUrls: ['./inloggen.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InloggenComponent implements OnInit {

  email: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  tryLogin(_backend: ConnectionBackend, _defaultOptions: RequestOptions) {
   console.log(new ApiService(new Http(_backend, _defaultOptions)).getData());
  }
}
