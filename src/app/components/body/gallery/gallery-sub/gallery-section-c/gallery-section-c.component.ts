import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-gallery-section-c',
  templateUrl: './gallery-section-c.component.html',
  styleUrls: ['./gallery-section-c.component.scss']
})
export class GallerySectionCComponent implements OnInit {

  NATURE = environment.TAG_NATURE
  WILDLIFE = environment.TAG_WILDLIFE
  CULTURE = environment.TAG_CULTURE
  PEOPLE = environment.TAG_PEOPLE
  CITIES = environment.TAG_CITIES
  EVENTS = environment.TAG_EVENTS
  FOOD = environment.TAG_FOOD

  childTitle: string = 'This text is passed to child';
  constructor() { }

  ngOnInit() {
  }

}
