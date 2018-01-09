import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  aboutData:array = 
  {
      quote1:'We are design and developing the effective animated website with responsive design that adopt the latest web technologies',
      quote2:'I have 5 years of working experience in website design & development',
      quote3:'Major Clients interested to build their websites with Wordpress CMS',
  };

  ngOnInit() {
  }

}
