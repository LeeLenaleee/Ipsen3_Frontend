import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InstellingenService } from '../instellingen.Service';
import { Kostenpost } from './kostenpost.model';

@Component({
  selector: 'app-kostenpost-list',
  templateUrl: './kostenpost-list.component.html',
  styleUrls: ['./kostenpost-list.component.css']
})
export class KostenpostListComponent implements OnInit {
  kostenposten: Kostenpost[] = []
  kostenpostForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private instellingenService: InstellingenService) { }

  ngOnInit() {
    // this.kostenpostForm = this.formBuilder.group({
    //   kostenpost: ['', Validators.required],
    // });
    this.instellingenService.getKostenPosten();
    this.instellingenService.arrayKostenPost.subscribe(
      (kostenposten: Kostenpost[]) => {
        this.kostenposten = kostenposten;
      }, error => {
        console.log("SOMETHING WENT HORRIBLY, TERRIBLY WRONG");
      }
    )
  }

}
