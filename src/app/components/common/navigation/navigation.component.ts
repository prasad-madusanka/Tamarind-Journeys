import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  brandLogo: string = ''
  brandName: string = ''

  constructor() { }

  ngOnInit() {
    this.initUI()
  }

  initUI(){
    this.brandLogo = './assets/img/brand/Logo.png'
    this.brandName = 'Tamarind Journeys'
  }

}
