import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-gallery-section-c',
  templateUrl: './gallery-section-c.component.html',
  styleUrls: ['./gallery-section-c.component.scss']
})
export class GallerySectionCComponent implements OnInit {

  currentModalPreview: { id: string, src: string; imageName: string; reactions: string; views: string; downloads: string; uploader: string; info: { cameraMake: string; cameraModel: string; focalLength: string; iso: string; shutterSpeed: string; aperture: string; dimensions: string; }; };
  myImages: any

  childTitle: string = 'This text is passed to child';
  tabSubtitles: { quoteCategoty: string; quoteDescription: string; quoteAuthor: string; }[];
  quoteDescription: String
  quoteAuthor: String
  quoteCategory: String

  constructor() { }

  ngOnInit() {

    this.initModalContent();
    this.loadImages(environment.TAG_NATURE)


    this.tabSubtitles = [
      {
        quoteCategoty: environment.TAG_NATURE,
        quoteDescription: 'Nature is so powerful, so strong. Capturing its essence is not easy - your work becomes a dance with light and the weather.It takes you to a place within yourself.',
        quoteAuthor: 'Annie Leibovitz'
      },
      {
        quoteCategoty: environment.TAG_WILDLIFE,
        quoteDescription: 'If we can teach people about wildlife, they will be touched. Share my wildlife with me. Because humans want to save things that they love.',
        quoteAuthor: 'Terri Irwin, Steve Irwin'
      },
      {
        quoteCategoty: environment.TAG_CULTURE,
        quoteDescription: 'A nations culture resides in the hearts and in the soul of its people',
        quoteAuthor: 'Mahatma Gandhi'
      },
      {
        quoteCategoty: environment.TAG_PEOPLE,
        quoteDescription: 'As soon as you get to Sri Lanka, you will notice that when people greet you, they wobble their head. When you ask them something, they wobble their head. Most of the time, they are also smiling while wobbling. This Sri Lankan personality trait is very common.',
        quoteAuthor: 'Orana Velarde'
      },
      {
        quoteCategoty: environment.TAG_CITIES,
        quoteDescription: 'I love kandy',
        quoteAuthor: 'Pubudu Shanaka'
      },
      {
        quoteCategoty: 'Nature',
        quoteDescription: '',
        quoteAuthor: ''
      },
      {
        quoteCategoty: 'Nature',
        quoteDescription: '',
        quoteAuthor: ''
      }
    ]

    this.quoteCategory = this.tabSubtitles[0].quoteCategoty
    this.quoteDescription = this.tabSubtitles[0].quoteDescription
    this.quoteAuthor = this.tabSubtitles[0].quoteAuthor

  }

  selectImageCategory(imgCategory) {
    this.quoteCategory = this.tabSubtitles[imgCategory].quoteCategoty
    this.quoteDescription = this.tabSubtitles[imgCategory].quoteDescription
    this.quoteAuthor = this.tabSubtitles[imgCategory].quoteAuthor

    this.loadImages(this.quoteCategory);
  }


  imageDetails(item) {

    this.currentModalPreview = {
      id: item,
      src: item.src,
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

  loadImages(imgCat) {
    if (imgCat == environment.TAG_WILDLIFE) {
      this.myImages = environment.Wild_Life
    }


    else if (imgCat == environment.TAG_NATURE) {
      this.myImages = environment.Nature
    }


    else if (imgCat == environment.TAG_CULTURE) {
      this.myImages = environment.culture
    }


    else if (imgCat == environment.TAG_PEOPLE) {
      this.myImages = environment.people
    }


    else if (imgCat == environment.TAG_CITIES) {
      this.myImages = environment.cities
    }
  }

  initModalContent() {
    this.currentModalPreview = {
      id: "",
      src: "",
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
