import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';

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

  messageFromTJ: string = ''

  isSendMessageButtonEnable: boolean = true

  contactMessage: any = ''
  contactFirstName: any
  contactLastName: any = ''
  contactEmailAddress: string = ''

  about_cover: string = ''

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.gmap()
    this.initUI()
  }

  initUI() {
    this.about_cover = 'assets/img/site-images/about-us/nature-1.jpg'
    this.messageFromTJ = "Tamarind journeys happily arrange your dream holiday,honeymoon vacation with hotel bookings. We highly recommend and select the ideal travel destinations around Sri Lanka."
  }

  gmap() {
    this.gmapURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.3076472803571!2d80.58710182915935!3d7.327978329820706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTknNDAuNyJOIDgwwrAzNScxNS41IkU!5e0!3m2!1sen!2slk!4v1549012378077&signed_in=false"key=' + environment.GM_KEY)
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
