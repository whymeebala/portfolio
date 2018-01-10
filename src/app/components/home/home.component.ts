import { Component, OnInit } from '@angular/core';
import { AlljsondataService } from '../../services/alljsondata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private alljsondataservice:AlljsondataService) { }

  homeData = this.alljsondataservice.allJsonData.homedata[0];

  ngOnInit() {
    this.alljsondataservice.allJsonData1();

  }

}
