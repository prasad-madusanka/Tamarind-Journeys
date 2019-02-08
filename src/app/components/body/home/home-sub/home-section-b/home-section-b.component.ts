import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section-b',
  templateUrl: './home-section-b.component.html',
  styleUrls: ['./home-section-b.component.scss']
})
export class HomeSectionBComponent implements OnInit {


  title: string = ''
  subtitle: string = ''
  content: string = ''
  description: string[] = []

  constructor() { }

  ngOnInit() {
    this.initUI()
  }

  initUI() {
    this.title = 'Welcome to Tamarind Journeys'
    this.subtitle = 'Excursion at your own Liberty and Leisure'
    this.content = 'Beyond Commercialism Perspective in sustainable Tourism along with Cooperative,Cordial innovative Strategies'
    this.description = [
      'Tamarind Journeys is a great service provider which give you a chance to spend a comfortable holiday in beautiful Sri Lanka. We can guarantee that our Guides and Chauffeurs are great service providers and equipped with experience and wide knowledge of tourism in Sri Lanka. We can supply you the most suitable tour package as you wish to tour around Sri Lanka. We can arrange your tour by car for one or two passengers. If you are in family or group of friends we can arrange a passenger van for you. Our staff and guides are capable enough to give our fullest support to travelers. They are fluent in English as well as other languages. We can afford your all traveling needs to spend your valuable holiday in lovely beaches, enjoying wild life, nature, history, culture and lifestyles of villagers. You can make an unforgettable, gorgeous traveling tour for the whole life time by shaking hands with us.',
      'Our staff is committed, well experienced and authorized we are fully dedicated to provide you nice, peaceful accommodation. We will cater you wonderful tours and excursions in the beautiful island in Sri Lanka.', 
      'Excursions across country side, away from towns and cities with fields’ woods and dairy farms along with cool, salubrious climes will definitely cater you an unforgettable experience in your life, during the seasonal tours in Sri Lanka.'
    ]
  }

}
