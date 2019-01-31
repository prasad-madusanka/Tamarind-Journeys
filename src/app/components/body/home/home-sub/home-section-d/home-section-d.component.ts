import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section-d',
  templateUrl: './home-section-d.component.html',
  styleUrls: ['./home-section-d.component.scss']
})
export class HomeSectionDComponent implements OnInit {

  clientQuotes: { style: string; clientImage: string; description: string; clientName: string }[]

  constructor() { }

  ngOnInit() {
    this.initUI()
  }

  initUI(){
    this.clientQuotes = [
      {
        style: "",
        clientImage: "/assets/img/faces/f1.jpg",
        description: "Sri Lanka peacefully located in the Indian Ocean in South Asia has a history dating back to the birth of time.it is the place where the original soul of Buddhism still flourishes and where nature’s beauty remains abundant and un spoilt.",
        clientName: "Pubudu Wijerathne"
      }, {
        style: "card-from-top",
        clientImage: "/assets/img/faces/f3.jpg",
        description: "Sri Lanka peacefully located in the Indian Ocean in South Asia has a history dating back to the birth of time.it is the place where the original soul of Buddhism still flourishes and where nature’s beauty remains abundant and un spoilt.",
        clientName: "Shanaka Wijerathne"
      },
      {
        style: "",
        clientImage: "/assets/img/faces/f2.jpg",
        description: "Sri Lanka peacefully located in the Indian Ocean in South Asia has a history dating back to the birth of time.it is the place where the original soul of Buddhism still flourishes and where nature’s beauty remains abundant and un spoilt.",
        clientName: "Pubudu Shanaka"
      }
    ]
  }

}
