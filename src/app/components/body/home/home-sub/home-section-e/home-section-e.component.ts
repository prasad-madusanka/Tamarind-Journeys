import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section-e',
  templateUrl: './home-section-e.component.html',
  styleUrls: ['./home-section-e.component.scss']
})
export class HomeSectionEComponent implements OnInit {

  reasonToTravelWithUs: { matIcon: string; title: string; description: string; colorClass: string }[]

  constructor() { }

  ngOnInit() {

    this.reasonToTravelWithUs = [

      {
        matIcon: "list",
        title: "Customize Tours",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        colorClass: "icon-info"
      }, {
        matIcon: "rowing",
        title: "Authentic Experience",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        colorClass: "icon-warning"
      }, {
        matIcon: "access_time",
        title: "24/7 Travel Team",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        colorClass: "icon-primary"
      }, {
        matIcon: "verified_user",
        title: "Assurances",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        colorClass: "icon-success"
      }, {
        matIcon: "attach_money",
        title: "Value for Money",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        colorClass: "icon-rose"
      }, {
        matIcon: "supervisor_account",
        title: "Experience Guide Fleets",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        colorClass: "icon-info"
      }, {
        matIcon: "fiber_new",
        title: "Newly Experience",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        colorClass: "icon-warning"
      }, {
        matIcon: "local_offer",
        title: "Festival Offers",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        colorClass: "icon-success"
      }, {
        matIcon: "card_giftcard",
        title: "Free Extras on Arrival",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        colorClass: "icon-rose"
      }


    ]

  }

}
