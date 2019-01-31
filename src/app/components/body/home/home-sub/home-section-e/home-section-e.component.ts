import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section-e',
  templateUrl: './home-section-e.component.html',
  styleUrls: ['./home-section-e.component.scss']
})
export class HomeSectionEComponent implements OnInit {

  reasonToTravelWithUs: { icon: string; title: string; content: string; style: string }[]

  constructor() { }

  ngOnInit() {

    this.initUI()

  }

  initUI() {
    this.reasonToTravelWithUs = [

      {
        icon: "list",
        title: "Customize Tours",
        content: "We are ready to give away our fullest cooperation to come true your dream destiny.",
        style: "icon-info"
      }, {
        icon: "rowing",
        title: "Authentic Experience",
        content: "Tour packages are made to have complete and lovely experiences for you all.",
        style: "icon-warning"
      }, {
        icon: "access_time",
        title: "24/7 Travel Team",
        content: "We are willingly dedicated to you all to satisfy our clients any time as your requirements.",
        style: "icon-primary"
      }, {
        icon: "verified_user",
        title: "Assurances",
        content: "We are bound to certify to supply assurance and protectiveness during your traveling time.",
        style: "icon-success"
      }, {
        icon: "attach_money",
        title: "Value for Money",
        content: "We have accountability on your money that is spending and the time you are. It won’t go in vein.",
        style: "icon-rose"
      }, {
        icon: "supervisor_account",
        title: "Experience Guide Fleets",
        content: "The guide fleets those who are working in our team are the most experienced & well knowledgeable people.",
        style: "icon-info"
      }, {
        icon: "fiber_new",
        title: "Newly Experience",
        content: "Sri Lanka is a country which full of unforgettable traveling destinations. We have included where places in our packages to experience the newest things.",
        style: "icon-warning"
      }, {
        icon: "local_offer",
        title: "Festival Offers",
        content: "Sri Lanka is a country with different kind Of festivals. Therefore we can give you many more benefits from these.",
        style: "icon-success"
      }, {
        icon: "card_giftcard",
        title: "Free Extras on Arrival",
        content: "Always we are there to supply you a free airport service on your arrival.",
        style: "icon-rose"
      }


    ]
  }

}
