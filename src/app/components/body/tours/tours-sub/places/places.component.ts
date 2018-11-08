import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  searchText: String
  data: { "img": string; "title": string; "descr": string; }[];

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        img: "https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80",
        title: "Trip A",
        descr: "Some trip apple need quick example text to build on the card title and make up the bulk of the card's content."
      },
      {
        img: "https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80",
        title: "Trip B",
        descr: "Some trip mango quick example text to build on the card title and make up the bulk of the card's content."
      },
      {
        img: "https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80",
        title: "Trip C",
        descr: "Banan is good for health"
      }
    ]


  }


  filterIt(arr, searchKey) {
    return arr.filter((obj) => {
      return Object.keys(obj).some((key) => {
        return obj[key].includes(searchKey)
      })
    })
  }

  search() {
    if (!this.searchText) {
      return this.data;
    }
    if (this.searchText) {
      return this.filterIt(this.data, this.searchText);
    }
  }

}
