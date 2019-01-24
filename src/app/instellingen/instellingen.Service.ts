import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Kostenpost } from './kostenpost-list/kostenpost.model';

@Injectable()
export class InstellingenService implements OnInit {
    headers_object = new HttpHeaders({ 'Authorization': 'basic ' + btoa(localStorage.getItem('email') + ':' +
    localStorage.getItem('password'))});
        httpOptions = {
        headers: this.headers_object
        };
    idUrl = 'http://localhost:8080/api/kostenpost'
    kostenPostGezocht = new EventEmitter<Kostenpost>();
    arrayKostenPost = new EventEmitter<Kostenpost[]>();
    constructor(private httpClient: HttpClient) { }

    // getKostenposten(id: number) {
    //     return this.showKostenpost(id).subscribe(
    //       (kostenpost: Kostenpost) => {
    //       this.kostenPostGezocht.emit(kostenpost);
    //       },
    //       (error) => console.log(error));
    // }

    // showKostenpost(id: number) {
    //     return this.httpClient.get<Kostenpost>(this.idUrl + id);
    // }

    getKostenPosten() {
        return this.httpClient.get<Kostenpost[]>(this.idUrl, this.httpOptions).subscribe(
            (onkosten: Kostenpost[]) => {
                console.log("getkostenpost woo");
                this.arrayKostenPost.emit(onkosten);
            }
        );
    }
    ngOnInit(): void {
        console.log("gheheheh");
        console.log(localStorage.getItem('currentUser'));
    }
}
