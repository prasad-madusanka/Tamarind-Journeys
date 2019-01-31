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
        "title": "Sigiriya, Sri Lanka",
        "content": "Gabbana is a luxury Italian fashion house founded in 1985 in Legnano by Italian designers Domenico Dolce and Stefano Gabbana.The two met in Milan in 1980 and designed for the same fashion house",
        "location": "Tangalle Rd, Tangalle, Sri Lanka"
      },
      {
        "activeImage": "",
        "src": "assets/img/carousel/2.jpg",
        "title": "Sigiriya, Sri Lanka",
        "content": "Gabbana is a luxury Italian fashion house founded in 1985 in Legnano by Italian designers Domenico Dolce and Stefano Gabbana.The two met in Milan in 1980 and designed for the same fashion house",
        "location": "Tangalle Rd, Tangalle, Sri Lanka"
      },
      {
        "activeImage": "",
        "src": "assets/img/carousel/3.jpg",
        "title": "Sigiriya, Sri Lanka",
        "content": "Gabbana is a luxury Italian fashion house founded in 1985 in Legnano by Italian designers Domenico Dolce and Stefano Gabbana.The two met in Milan in 1980 and designed for the same fashion house",
        "location": "Tangalle Rd, Tangalle, Sri Lanka"
      },
      {
        "activeImage": "",
        "src": "assets/img/carousel/4.jpg",
        "title": "Sigiriya, Sri Lanka",
        "content": "Gabbana is a luxury Italian fashion house founded in 1985 in Legnano by Italian designers Domenico Dolce and Stefano Gabbana.The two met in Milan in 1980 and designed for the same fashion house",
        "location": "Tangalle Rd, Tangalle, Sri Lanka"
      }
    ]
  }

}
