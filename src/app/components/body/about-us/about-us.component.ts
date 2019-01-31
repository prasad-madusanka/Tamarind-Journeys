import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  marker: string = 'Tamaring Journeys Head Office';
  lat: number = 7.284440;
  lng: number = 80.637466;

  gmapURL: any


  isSendMessageButtonEnable: boolean = true

  contactMessage: any = ''
  contactFirstName: any
  contactLastName: any = ''
  contactEmailAddress: string = ''

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.gmap()
  }

  gmap() {
    this.gmapURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ06yYZCZm4zoRNTzgoRg4GkE&key=AIzaSyD_kWHOm9ivoZ2vP942FetV_ZvGTvUq-QI')
  }

  aboutUsContact() { }

  validateContactForm() {

    var firstName = (isNaN(this.contactFirstName) && this.contactFirstName && this.validateName(this.contactFirstName)) ? true : false
    var lastName = (isNaN(this.contactLastName) && this.contactLastName && this.validateName(this.contactLastName)) ? true : false
    var email = (this.contactEmailAddress && this.validateEmail(this.contactEmailAddress)) ? true : false
    var message = (isNaN(this.contactMessage) && this.contactMessage) ? true : false
    this.isSendMessageButtonEnable = (firstName && lastName && email && message) ? false : true
  }

  validateEmail(email) {
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
  }

  validateName(name) {
    var reg = /^[A-Za-z]+$/
    return reg.test(String(name))
  }

}
