import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-gallery-section-b',
  templateUrl: './gallery-section-b.component.html',
  styleUrls: ['./gallery-section-b.component.scss']
})
export class GallerySectionBComponent implements OnInit {

  round: any = []
  gallery_cover: string = ''
  quote: any = {}

  constructor() { }

  ngOnInit() {
    this.initUI()
  }

  initUI() {

    this.gallery_cover = 'assets/img/carousel/2.jpg'

    this.quote = {
      "header":'"Every picture tells a story"',
      "body":"So feel the picturesque beauty of Sri Lankan Heritage, Beaches, Wildlife, Mind and body wellness, Scenic beauty, Sport and Adventure, Festivals and Essence"
    }

    var imageCount = environment.Nature.length + environment.Wild_Life.length + environment.culture.length + environment.people.length

    this.round = [{
      "value": imageCount+100,
      "c1": '#df6c4f',
      "c2": '#df6c4f4d',
      "title": "Photos",
      "maxPercent":"50"
    }, {
      "value": "300",
      "c1": '#ecd06f',
      "c2": '#ecd06f4d',
      "title": "Locations",
      "maxPercent":"40"
    }, {
      "value": 200,
      "c1": '#00FCA3',
      "c2": '#00fca34d',
      "title": "Viewers",
      "maxPercent":"100"
    }]
  }

  /* 
  , {
    "value": "110",
    "c1": '#1a99aa',
    "c2": '#1a99aa4d',
    "title": "Contributors"
  },
  */

}
