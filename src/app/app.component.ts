import { Component } from '@angular/core';
import {InfoService} from './info.service';
import { Directive} from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  

  <br><br><br><br><br>
  <div class="button">
 <button (click)="loadData()">Get Data</button>
 Details: {{ Info | json}}
 </div>
  `
  
})


export class AppComponent {
  

constructor(private InfoService: InfoService) {}
Info = {};


loadData() {
  this.InfoService.getData().subscribe(data => this.Info = data);
}
  
}

