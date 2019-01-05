import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  searchText: String
  data: { "img": string; "title": string; "shortDescription": string; "completeDescription": string; }[];
  items: { "img": string; "title": string; "shortDescription": string; "completeDescription": string; }

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        img: "/assets/img/Gallery/People/People_10.jpg",
        title: "Adventure Tours",
        shortDescription: "You can feel the experience with Surfing in the beautiful blue sea, whale watching, travelling in ",
        completeDescription: "You can feel the experience with Surfing in the beautiful blue sea, whale watching, travelling in "
      },
      {
        img: "/assets/img/Gallery/Nature/7.jpg",
        title: "Agro Tourism",
        shortDescription: "Cinnamon Journeys is dedicated to supply you a practical experience related to different cultures",
        completeDescription: "You can feel the experience with Surfing in the beautiful blue sea, whale watching, travelling in "
      },
      {
        img: "/assets/img/Gallery/Nature/Nature_13.jpg",
        title: "Nature Trails",
        shortDescription: "Sri Lanka is a beautiful country which is full bio diversity and surrounded by blue sea.",
        completeDescription: "You can feel the experience with Surfing in the beautiful blue sea, whale watching, travelling in "
      },
      {
        img: "/assets/img/Gallery/Cities/Cities_2.jpg",
        title: "Sri Lankan Highlights",
        shortDescription: "Join with us to have the experience by visiting ancient kingdoms in ancient historical Sri Lanka, Join with us to have the experience by visiting ancient kingdoms in ancient historical Sri Lanka ",
        completeDescription: "You can feel the experience with Surfing in the beautiful blue sea, whale watching, travelling in "
      }
    ]

    this.items = this.data[0]

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
      return this.data;
    }
    if (this.searchText) {
      return this.filterIt(this.data, this.searchText.toLowerCase());
    }
  }

  tourDetails(item) {
    this.items = item
  }

}
