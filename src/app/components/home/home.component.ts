import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  homedata:any = 
    {
        title:'Angular Application Developer',
        subtitle:'CHENNAI CITY',
        content:'We are building the most effective animated website for you, From backend development to front end design and usability with responsive website for desktop and mobile devices.',
        number:'+919043512898',
        altnumber:'+918807388141',
    };

  ngOnInit() {
  }

}
