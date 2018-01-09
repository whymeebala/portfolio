import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor() { }
  serviceData:array =     {
      "servicedata": [
        {
          "subtitle":"Website",
          "content":"Make your business with effective and optimized website",
        },
        {
          "subtitle":"Technologies",
          "content":"HTML5 & CSS3, Sass, Javascript, and Jquery",
        },
        {
          "subtitle":"Framework",
          "content":"Wordpress, Bootstrap",
        },
        {
          "subtitle":"AngularJS",
          "content":"Get your single application for both Desktop and Mobile",
        }
      ],

  }
  ngOnInit() {
    console.log(this.serviceData);
  }

}
