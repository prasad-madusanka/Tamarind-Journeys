import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-section-b',
  templateUrl: './gallery-section-b.component.html',
  styleUrls: ['./gallery-section-b.component.scss']
})
export class GallerySectionBComponent implements OnInit {

  round = [{
    "value": "200",
    "c1": '#df6c4f',
    "c2": '#df6c4f4d',
    "title": "Photos"
  },
  {
    "value": "300",
    "c1": '#ecd06f',
    "c2": '#ecd06f4d',
    "title": "Locations"
  }, {
    "value": "110",
    "c1": '#1a99aa',
    "c2": '#1a99aa4d',
    "title": "Contributors"
  }, {
    "value": "100",
    "c1": '#00FCA3',
    "c2": '#00fca34d',
    "title": "Viewers"
  }]

  constructor() { }

  ngOnInit() {
  }

}
