import { Component, OnInit } from '@angular/core';
import { AlljsondataService } from '../../services/alljsondata.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  constructor(private alljsondataservice:AlljsondataService) { }

  contactData = this.alljsondataservice.allJsonData.contactdata[0];
  contactAddress = this.alljsondataservice.allJsonData.contactdata[0].address;
  socialLink = this.alljsondataservice.allJsonData.contactdata[0].sociallinks;

  ngOnInit() {
    console.log(this.socialLink)
  }

}
