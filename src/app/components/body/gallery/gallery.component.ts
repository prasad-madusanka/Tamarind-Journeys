import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {


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
    "title": "Categories"
  },
  {
    "value": "350",
    "c1": '#3c948b',
    "c2": '#3c948b4d',
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
    //this.progressValue = 32
  }


}

/**
 * 
 * Red
 * #df6c4f
 * #df6c4f4d
 * 
 * Yellow
 * #ecd06f
 * #ecd06f4d
 * 
 * BlueGreen
 * #3c948b
 * #3c948b4d
 * 
 * Blue
 * #1a99aa
 * #1a99aa4d
 * 
 * Green
 * #00FCA3
 * #00fca34d
 * 
 * 
 */