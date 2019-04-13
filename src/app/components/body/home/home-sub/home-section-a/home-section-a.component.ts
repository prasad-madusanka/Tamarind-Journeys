import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section-a',
  templateUrl: './home-section-a.component.html',
  styleUrls: ['./home-section-a.component.scss']
})
export class HomeSectionAComponent implements OnInit {


  carousel: any = []

  constructor() { }

  ngOnInit() {
    this.initCarousel()
  }

  initCarousel() {
    this.carousel = [
      {
        "activeImage": "active",
        "src": "assets/img/carousel/1.jpg",
        "title": "Temple of Tooth Relic",
        "content": "A buddhist temple located in the royal palace complex of the last administrative kingdom of ancient sri lanka, which houses the relic of the tooth of the lord buddha",
        "location": "Kandy, Sri Lanka"
      },
      {
        "activeImage": "",
        "src": "assets/img/carousel/2.jpg",
        "title": "Devi - Nuwara (Dondra)",
        "content": "The little town of Devi - Nuwara or the 'City of Gods' is located at the most southern edge of the country. According to the legend Devinuwara was a flourishing city in the time of King 'Rawana'",
        "location": "Dewundara, Sri Lanka"
      },
      {
        "activeImage": "",
        "src": "assets/img/carousel/3.jpg",
        "title": "Golden Southern Beach",
        "content": "With nearly 1600km of palm fringed coastline baked to perfection surrounding the country Sri Lanka …is the ideal destination for beach bums worldwide may it be windsurfing, kayaking, yachting, water skiing, scuba diving or just lazing around for the perfect tan",
        "location": "Matara, Sri Lanka"
      },
      {
        "activeImage": "",
        "src": "assets/img/carousel/4.jpg",
        "title": "Yala",
        "content": "The second biggest National Park in Sri Lanka and One of the most ideal National Park in South Asia and home for the the Sri Lankan Leopard (Panthera Pardus Kotiya)",
        "location": "Yala, Sri Lanka"
      }
    ]
  }

}
