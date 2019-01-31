import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryModalComponent implements OnInit {

  @Input() obj: any

  constructor() {

  }

  ngOnInit() {

    this.handleModalScrolling();


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
