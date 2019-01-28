import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Kostenpost } from '../models/kostenpost.model';
import { ApiService } from '../shared/api.service';
import { Observable } from 'rxjs';
import {Onkosten} from '../models/onkosten.model';

@Injectable()
export class InstellingenService implements OnInit {
    constructor(private apiService: ApiService) {}

    getKostenPosten(): Observable<Kostenpost[]> {
        return this.apiService.get<Kostenpost[]>('/kostenpost');
    }

    postKostenPost(kostenpost: Kostenpost): Observable<Kostenpost> {
        return this.apiService.post<Kostenpost>('/kostenpost', kostenpost);
    }

  deleteKostenpost(id: number) {
    return this.apiService.delete<Onkosten>('/kostenpost', id);
  }
    
    ngOnInit(): void {
    }
}
