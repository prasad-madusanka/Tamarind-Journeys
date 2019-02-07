import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {

  cover: any = {}
  tours: any = {}

  constructor() { }

  ngOnInit() {
    this.initUI()
  }

  initUI() {
    this.cover = {
      "src": "assets/img/site-images/tours/tours-cover.jpg",
      "title": "Explore Beauty in Every Step",
      "subtitle": "Pick the best trip plan for you"
    }

    this.tours = {
      "title": "We are",
      "content": "Tamarind Journeys is a great service provider which give you a chance to spend a comfortable holiday in beautiful Sri Lanka. We can guarantee that our Guides and Chauffeurs are great service providers and equipped with experience and wide knowledge of tourism in Sri Lanka. We can supply you the most suitable tour package as you wish to tour around Sri Lanka. We can arrange your tour by car for one or two passengers. If you are in family or group of friends we can arrange a passenger van for you. Our staff and guides are capable enough to give our fullest support to travelers. They are fluent in English as well as other languages. We can afford your all travelling needs to spend your valuable holiday in lovely beaches, enjoying wild life, nature, history, culture and lifestyles of villagers. You can make an unforgettable, gorgeous travelling tour for the whole life time by shaking hands with us."
    }

  }


}
