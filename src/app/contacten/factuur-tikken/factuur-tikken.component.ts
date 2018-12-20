import { Component, OnInit } from '@angular/core';
import {Http, ResponseContentType} from '@angular/http';
import 'rxjs-compat/add/operator/map';

@Component({
  selector: 'app-factuur-tikken',
  templateUrl: './factuur-tikken.component.html',
  styleUrls: ['./factuur-tikken.component.css']
})
export class FactuurTikkenComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

}
