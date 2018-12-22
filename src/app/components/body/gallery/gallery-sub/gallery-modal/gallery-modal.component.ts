import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var $: any;

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss']
})
export class GalleryModalComponent implements OnInit {

   @Input() title: string;
  // currentModalPreview: { id: string, path: string; imageName: string; reactions: string; views: string; downloads: string; uploader: string; info: { cameraMake: string; cameraModel: string; focalLength: string; iso: string; shutterSpeed: string; aperture: string; dimensions: string; }; };

  // myImages: any



  constructor() {

  }

  ngOnInit() {

    //this.handleModalScrolling();


    // if (this.title == environment.TAG_WILDLIFE) {
    //   this.myImages = environment.Wild_Life
    // }


    // if (this.title == environment.TAG_NATURE) {
    //   this.myImages = environment.Nature
    // }


    // if (this.title == environment.TAG_CULTURE) {
    //   this.myImages = environment.culture
    // }


    // if (this.title == environment.TAG_PEOPLE) {
    //   this.myImages = environment.people
    // }


    // if (this.title == environment.TAG_CITIES) {
    //   this.myImages = environment.cities
    // }



    // this.currentModalPreview = {
    //   id: "",
    //   path: "",
    //   imageName: "",
    //   reactions: "",
    //   views: "",
    //   downloads: "",
    //   uploader: "",
    //   info: {
    //     cameraMake: "",
    //     cameraModel: "",
    //     focalLength: "",
    //     iso: "",
    //     shutterSpeed: "",
    //     aperture: "",
    //     dimensions: ""
    //   }
    // }
  }

  // imageDetails(id, pathx) {
  //   this.currentModalPreview = {
  //     id: id,
  //     path: pathx,
  //     imageName: "",
  //     reactions: "",
  //     views: "",
  //     downloads: "",
  //     uploader: "",
  //     info: {
  //       cameraMake: "",
  //       cameraModel: "",
  //       focalLength: "",
  //       iso: "",
  //       shutterSpeed: "",
  //       aperture: "",
  //       dimensions: ""
  //     }
  //   }


  // }

  handleModalScrolling() {
    $('.modal').on("hidden.bs.modal", function (e) {
      if ($('.modal:visible').length) {
        $('.modal-backdrop').first().css('z-index', parseInt($('.modal:visible').last().css('z-index')) - 10);
        $('body').addClass('modal-open');
      }
    }).on("show.bs.modal", function (e) {
      if ($('.modal:visible').length) {
        $('.modal-backdrop.in').first().css('z-index', parseInt($('.modal:visible').last().css('z-index')) + 10);
        $(this).css('z-index', parseInt($('.modal-backdrop.in').first().css('z-index')) + 10);
      }
    });
  }


}
