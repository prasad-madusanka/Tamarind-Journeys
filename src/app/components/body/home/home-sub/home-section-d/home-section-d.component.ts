import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section-d',
  templateUrl: './home-section-d.component.html',
  styleUrls: ['./home-section-d.component.scss']
})
export class HomeSectionDComponent implements OnInit {

  clientQuotes: { style: string; clientImage: string; description: string; country: string; clientName: string }[]

  constructor() { }

  ngOnInit() {
    this.initUI()
  }

  initUI() {
    this.clientQuotes = [
      {
        style: "",
        clientImage: "assets/img/site-images/comments/comment-1.jpg",
        description: "Thank you so much for your kindness! It was our first time to use in Sri Lanka tour and we feel it's really convinient and nice with your warm smile and kind explanation answer to our continues questions we know more about Sri Lanka",
        clientName: "Mr. Masai",
        country: "USA"
      }, {
        style: "card-from-top",
        clientImage: "assets/img/site-images/comments/comment-2.jpg",
        description: "It was great pleasure an amazing tour in Sri Lanka. We spend 14 days in Sri Lanka with our Guide. 2 days in Kandy 3 days in National Park also Dambulla Sigiriya Bentota Galle. He was knowledgeable in many areas in Sri Lanka such as Geography, Socialogy, Anthropology, Natur, Govenment, Animals, Birds, History also he knows what we need and want so thank you very much Tamarind Journeys",
        clientName: "Ms. Marina Fomicheva",
        country: "Russia"
      },
      {
        style: "",
        clientImage: "assets/img/site-images/comments/comment-3.jpg",
        description: "Sri Lanka peacefully located in the Indian Ocean in South Asia has a history dating back to the birth of time. It is the place where the original soul of Buddhism still flourishes and where nature’s beauty remains abundant and un spoilt.",
        clientName: "Ms. Cassandra Brown",
        country: "Australia"
      }
    ]
  }

}
