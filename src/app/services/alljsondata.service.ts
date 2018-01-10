import { Injectable } from '@angular/core';

@Injectable()
export class AlljsondataService {

  constructor() { }
  allJsonData:any =     {
      "homedata": [ 
        {
          "title" : "Angular Application Developer",
          "subtitle" : "BALACHANDAR K",
          "content" : "I am building the most effective animated website and Web Application for you,",
          "content2" : "From backend development to front end design and usability with responsive for desktop and mobile devices.",
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
         "servicetitle":"Our Services",
         "servicecontent":"We are always ready to make a effective animated website for you",
        },
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
      "contactdata": [
        {
         "number1":"+919043512898",
         "number2":"+918807388141",
         "email":"whymeebala@gmail.com",
         "address": {
           "doorno" : "#71/29,",
           "street" : "Sivasubramaniayasami koil street,",
           "area" : "Saidapet,",
           "city" : "Chennai - 15"
           },
           "sociallinks":{
             "facebook":"https://www.facebook.com/balachandar.bala.5245",
             "twitter":"https://twitter.com/balachandar742",
             "google":"https://plus.google.com/103329705986540218532",
           }
        }
      ]

  }

}
