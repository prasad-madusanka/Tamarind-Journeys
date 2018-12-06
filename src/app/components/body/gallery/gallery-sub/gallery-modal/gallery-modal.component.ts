import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss']
})
export class GalleryModalComponent implements OnInit {

  @Input() title: string;
  currentModalPreview: { id: string, path: string; imageName: string; reactions: string; views: string; downloads: string; uploader: string; info: { cameraMake: string; cameraModel: string; focalLength: string; iso: string; shutterSpeed: string; aperture: string; dimensions: string; }; };

  myImages = [{
    'preview': '/assets/img/examples/mariya-georgieva.jpg',
    'full': 'Image D'
  }, {
    'preview': '/assets/img/examples/olu-eletu.jpg',
    'full': 'Image E'
  }, {
    'preview': '/assets/img/examples/studio-1.jpg',
    'full': 'Image F'
  }, {
    'preview': '/assets/img/examples/studio-2.jpg',
    'full': 'Image G'
  }, {
    'preview': '/assets/img/examples/studio-3.jpg',
    'full': 'Image H'
  }, {
    'preview': '/assets/img/examples/studio-4.jpg',
    'full': 'Image I'
  }, {
    'preview': '/assets/img/examples/studio-5.jpg',
    'full': 'Image J'
  }, {
    'preview': '/assets/img/examples/studio-5.jpg',
    'full': 'Image J'
  }, {
    'preview': '/assets/img/examples/studio-1.jpg',
    'full': 'Image F'
  }, {
    'preview': '/assets/img/examples/studio-2.jpg',
    'full': 'Image G'
  }, {
    'preview': '/assets/img/examples/studio-3.jpg',
    'full': 'Image H'
  }, {
    'preview': '/assets/img/examples/studio-4.jpg',
    'full': 'Image I'
  }, {
    'preview': '/assets/img/examples/studio-5.jpg',
    'full': 'Image J'
  }, {
    'preview': '/assets/img/examples/studio-5.jpg',
    'full': 'Image J'
  }
  ]



  constructor() { }

  ngOnInit() {
    this.currentModalPreview = {
      id: "",
      path: "",
      imageName: "",
      reactions: "",
      views: "",
      downloads: "",
      uploader: "",
      info: {
        cameraMake: "",
        cameraModel: "",
        focalLength: "",
        iso: "",
        shutterSpeed: "",
        aperture: "",
        dimensions: ""
      }
    }
  }

  imageDetails(id, path) {
    this.currentModalPreview = {
      id: id,
      path: path,
      imageName: "",
      reactions: "",
      views: "",
      downloads: "",
      uploader: "",
      info: {
        cameraMake: "",
        cameraModel: "",
        focalLength: "",
        iso: "",
        shutterSpeed: "",
        aperture: "",
        dimensions: ""
      }
    }
  }

}
