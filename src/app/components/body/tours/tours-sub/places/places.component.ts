import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  searchText: String
  tourCategories: { "src": string; "title": string; "subDescription": string; "mainDescription": string; }[];
  selectedItem: { "src": string; "title": string; "subDescription": string; "mainDescription": string; }

  constructor() { }

  ngOnInit() {
    this.tourCategories = [
      {
        src: "assets/img/site-images/JPEG/adventure_tours.jpg",
        title: "Adventure Tours",
        subDescription: "You can feel the experience with Surfing in the beautiful blue sea, whale watching, travelling in ",
        mainDescription: "You can feel the experience with Surfing in the beautiful blue sea, whale watching, travelling in Asian national parks, travelling in the train across beautiful tea estates in upcountry, hiking, trekking & camping experience in mountain rangers that belongs to the world Heritage site of UNESCO. Experience the bicycle rides across Blue Mountains and white water rafting and canyoning in cool clean water."
      },
      {
        src: "assets/img/site-images/JPEG/agro_tours.jpg",
        title: "Agro Tourism",
        subDescription: "Tamarind Journeys is dedicated to supply you a practical experience related to different cultures",
        mainDescription: "Tamarind Journeys is dedicated to supply you a practical experience related to different cultures, life styles and agricultural methods in various areas in our agricultural country in Asia."
      },
      {
        src: "assets/img/site-images/JPEG/nature_tours.jpg",
        title: "Nature Trails",
        subDescription: "Sri Lanka is a beautiful country which is full bio diversity and surrounded by blue sea.",
        mainDescription: "Sri Lanka is a beautiful country which is full bio diversity and surrounded by blue sea. There we can find many species of flora and fauna which adapted to different environment systems. Join your hands with Tamarind Journeys to make you happy and wonderful while travelling in mountains, watching waterfalls, walking in evergreen forests and to get wild life experience."
      },
      {
        src: "assets/img/site-images/JPEG/srilankan_highlights.jpg",
        title: "Sri Lankan Highlights",
        subDescription: "Join with us to have the experience by visiting ancient kingdoms in ancient historical Sri Lanka, Join with us to have the experience by visiting ancient kingdoms in ancient historical Sri Lanka ",
        mainDescription: "Join with us to have the experience by visiting ancient kingdoms in ancient historical Sri Lanka that has embarking history more than 2500 years. We give you the chance to visit Sri Lanka life style in varies areas."
      }
    ]

    this.selectedItem = this.tourCategories[0]

  }


  filterIt(arr, searchKey) {
    return arr.filter((obj) => {
      return Object.keys(obj).some((key) => {
        return obj[key].toLowerCase().includes(searchKey)
      })
    })
  }

  search() {
    if (!this.searchText) {
      return this.tourCategories;
    }
    if (this.searchText) {
      return this.filterIt(this.tourCategories, this.searchText.toLowerCase());
    }
  }

  tourDetails(item) {
    this.selectedItem = item
  }

}
