import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excursions',
  templateUrl: './excursions.component.html',
  styleUrls: ['./excursions.component.scss']
})
export class ExcursionsComponent implements OnInit {

  searchText: String
  data: { "img": string; "title": string; "shortDescription": string; "completeDescription": string; }[];
  items: { "img": string; "title": string; "shortDescription": string; "completeDescription": string; }

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        img: "/assets/img/Gallery/Cities/Cities_2.jpg",
        title: "Kandy City Tour",
        shortDescription: "Kandy, one of the most eye pleasuring town that is famous as the last historical kingdom of Sri Lanka",
        completeDescription: "You can feel the experience with Surfing in the beautiful blue sea, whale watching, travelling in "
      },
      {
        img: "/assets/img/Gallery/Culture/Culture_10.jpg",
        title: "Ancient City Tour – Anuradhapura",
        shortDescription: "Anuradhapura, the first Historical Kingdom of Sri Lanka in 04th century. It is in North Central Province",
        completeDescription: "You can feel the experience with Surfing in the beautiful blue sea, whale watching, travelling in "
      },
      {
        img: "/assets/img/Gallery/Culture/Culture_4.jpg",
        title: "Three Temple & Pinnawala Elephant Orphanage Visit",
        shortDescription: "Gampola Kindgdom is another oldest and ancient kingdom in Sri Lanka. In here we can visit the most famous temple",
        completeDescription: "You can feel the experience with Surfing in the beautiful blue sea, whale watching, travelling in "
      },
      {
        img: "/assets/img/Gallery/Culture/Culture_2.jpg",
        title: "Cultural Trails",
        shortDescription: "This has become the worlds’ 08th wonder and this is a UNESCO World Heritage Site. Called “Sinha-Giriya",
        completeDescription: "You can feel the experience with Surfing in the beautiful blue sea, whale watching, travelling in "
      },
      {
        img: "/assets/img/Gallery/Culture/3.jpg",
        title: "Pidurangala, Dambulla & Village Tour in Sigiriya",
        shortDescription: "Pidurangala viharaya is situated iin Sigiriya kingdom. And it is 340 m height from the Sea level. This is a Buddhist",
        completeDescription: "You can feel the experience with Surfing in the beautiful blue sea, whale watching, travelling in "
      },
      {
        img: "/assets/img/Gallery/Culture/6.jpg",
        title: "Kandy Hide-Out Trails",
        shortDescription: "The first Agro Technology Park situated inn Kandy; UNESCOO World Heritage city is a place which depicts ancient",
        completeDescription: "You can feel the experience with Surfing in the beautiful blue sea, whale watching, travelling in "
      },
      {
        img: "/assets/img/Gallery/Cities/Cities_6.jpg",
        title: "Nuwara Eliya City Tour",
        shortDescription: "Nuwara Eliya known as “Little England” is a city in the Tea Country, hills of Central Sri Lanka. Its name means",
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

  excursionsDetails(item) {
    this.items = item
  }

}
