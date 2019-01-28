import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Kostenpost } from './kostenpost-list/kostenpost.model';
import { ApiService } from '../shared/api.service';
import { Observable } from 'rxjs';

@Injectable()
export class InstellingenService implements OnInit {

    constructor(private apiServie: ApiService) {}

    getKostenPosten(): Observable<Kostenpost[]> {
        return this.apiServie.get<Kostenpost[]>("/kostenpost");
    }

    postKostenPost(kostenpost: Kostenpost): Observable<Kostenpost> {
        return this.apiServie.post<Kostenpost>("/kostenpost", kostenpost);
    }
    
    ngOnInit(): void {
        console.log("gheheheh");
        console.log(localStorage.getItem('currentUser'));
    }
}
