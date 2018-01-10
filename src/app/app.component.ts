import { Component } from '@angular/core';

import { AlljsondataService } from './services/alljsondata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private alljsondataservice:AlljsondataService) { }

  logoUrl = this.alljsondataservice.allJsonData.logourl;


  ngOnInit() {
    console.log(this.logoUrl)
  }
  
}
