import { Injectable } from '@angular/core';

@Injectable()
export class AlljsondataService {

  constructor() { }
  allJsonData:array =     {
      "homedata": [ 
        {
          "title" : "Angular Application Developer",
          "subtitle" : "CHENNAI CITY",
          "content" : "We are building the most effective animated website for you, From backend development to front end design and usability with responsive website for desktop and mobile devices.",
          "number" : "+919043512898",
          "altnumber" : "+918807388141",
        },
      ],
      "aboutdata": [
        {
          "quote1" : "We are design and developing the effective animated website with responsive design that adopt the latest web technologies",
          "quote2" : "I have 5 years of working experience in website design & development",
          "quote3" : "Major Clients interested to build their websites with Wordpress CMS",
        }
      ],
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

}
