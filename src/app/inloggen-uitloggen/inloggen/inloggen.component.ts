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
    this.apiUrl3 = 'http://localhost:8080/api?name=' + wachtwoord;
    const response = this.http.get(this.apiUrl3);
    response.subscribe((res) => console.log(res));
  }

}
