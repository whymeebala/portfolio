import { Component, OnInit } from '@angular/core';
import { AlljsondataService } from '../../services/alljsondata.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  constructor(private alljsondataservice:AlljsondataService) { }
  serviceData = this.alljsondataservice.allJsonData.servicedata;
  ngOnInit() {  }

}
