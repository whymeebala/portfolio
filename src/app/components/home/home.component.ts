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
  homeData1 = this.alljsondataservice.allJsonData1();
  ngOnInit() {
    this.homeData1;
    console.log(this.homeData1);
  }

}
