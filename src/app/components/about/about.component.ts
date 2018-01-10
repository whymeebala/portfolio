import { Component, OnInit } from '@angular/core';
import { AlljsondataService } from '../../services/alljsondata.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  constructor(private alljsondataservice:AlljsondataService) { }

  aboutData = this.alljsondataservice.allJsonData.aboutdata[0];

  ngOnInit() {
  }

}
