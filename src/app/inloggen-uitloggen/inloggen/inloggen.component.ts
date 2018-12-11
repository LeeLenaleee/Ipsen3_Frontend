import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-inloggen',
  templateUrl: './inloggen.component.html',
  styleUrls: ['./inloggen.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InloggenComponent implements OnInit {

  email: string;
  password: string;
  apiUrl2 = 'http://localhost:8080/api?name=pietertje';
  apiUrl3 = 'http://localhost:8080/api?name=';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  /*  const response = this.http.get(this.apiUrl2);
    response.subscribe((res) => console.log(res));*/
    this.email = 'hi@g.com';
    this.apiUrl3 = 'http://localhost:8080/api?name=' + this.email;
    const response = this.http.get(this.apiUrl3);
    response.subscribe((res) => console.log(res));
  }
  inloggen(emailAdress: any) {
    this.email = emailAdress.target.mail.email;
    this.apiUrl3 = 'http://localhost:8080/api?name=' + this.email;
    const response = this.http.get(this.apiUrl3);
    response.subscribe((res) => console.log(res));
  }

}
