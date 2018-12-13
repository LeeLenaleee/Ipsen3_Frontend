import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-inloggen',
  templateUrl: './inloggen.component.html',
  styleUrls: ['./inloggen.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InloggenComponent implements OnInit {
  @ViewChild('email') emailAdress: ElementRef;
  @ViewChild('password') password: ElementRef;

  apiUrl2 = 'http://localhost:8080/api?name=WietseIsBaas';
  apiUrl3 = 'http://localhost:8080/api?name=';

  constructor(private http: HttpClient) { }

  ngOnInit() {  }

  inloggen() {
    const email = this.emailAdress.nativeElement.value;
    const wachtwoord = this.password.nativeElement.value;

    this.apiUrl3 = 'http://localhost:8080/api/login?email=' + email + '&password=' + wachtwoord;

    const xhr = new XMLHttpRequest();
    xhr.timeout = 2000;
    xhr.onreadystatechange = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (xhr.responseText === '[{"credentials": "true"}]') {
            alert('Login sucses');
          } else {
            alert('Login info fout');
          }
        } else {
          alert('No response from login server');
        }
      }
    };
    xhr.ontimeout = function () {
      alert('somethiong went wrong');
    };
    xhr.open('get', this.apiUrl3, true);
    xhr.send();
  }

}
