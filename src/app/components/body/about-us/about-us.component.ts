import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  title: string = 'Cinnamon Journeys Head Office';
  lat: number = 7.284440;
  lng: number = 80.637466;

  constructor() { }

  ngOnInit() {
  }

}
