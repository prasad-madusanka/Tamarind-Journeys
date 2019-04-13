import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/Services/Twitter/moment.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  brandLogo: string = ''

  agencyAddress: any = {}
  agencyRegistration: string = ''
  agencyRegistrationYear: number
  agencyDescription: string = ''

  agencyContactEmail: string = ''
  agencyContactNumbers: string[] = []
  agencyFacebookPage: string = ''
  agencyTwitterProfile: string = ''
  agencyTripAdivisor: string = ''

  tweetsMoments: string[] = []
  tweets: any[] = []

  devEmail: string = "prasad.mads@gmail.com"
  devTel: string = "+94 777 578 947"
  isEmail: boolean = false
  isMobile: boolean = false

  constructor(private momentService: MomentService) { }

  ngOnInit() {
    this.initUI()
    //this.getMoments()
  }

  initUI() {

    this.brandLogo = './assets/img/brand/Brand.png'

    this.agencyAddress = {
      "Line1": "Tamarind Journeys",
      "Line2": "No.55/14/1,",
      "Line3": "Kurunegala Road,",
      "Line4": "Nugawela.",
    }

    this.agencyDescription = "Tamarind Journeys, we are destination management agency plan your tour or holiday in Sri Lanka. We arrange excursions across country side,away from town and cities with fields woods and dairy farms along with cool,salubrious climes scenic beaches will definitely cater you and unforgatable experience in your life, during the seasonal journeys in Sri Lanka with Tamarind Journeys."

    this.agencyRegistration = "All Rights Reserved by Tamarind Journeys"

    this.agencyRegistrationYear = new Date().getFullYear()

    this.agencyContactEmail = "tours@tamarindjourneys.com"

    this.agencyContactNumbers = ['(+94) 715 920 819', '(+94) 770 571 554', '(+94) 713 432 047']

    this.agencyFacebookPage = "http://fb.me/tamarindjourneys"

    this.agencyTwitterProfile = 'https://twitter.com/TamarindJourney'

    this.tweetsMoments = ['1091205378216325120', '1091205378216325120', '1091205378216325120']

    this.agencyTripAdivisor = 'https://www.tripadvisor.com/Attraction_Review-g304138-d16819224-Reviews-Tamarind_Journeys-Kandy_Kandy_District_Central_Province.html'

  }

  fetchMoment(moment_id) {
    this.momentService.getMoment(moment_id).subscribe((moment) => {
      if (moment instanceof Object) {
        this.tweets.push(moment)
      }
    })
  }

  getMoments() {
    this.tweetsMoments.forEach((item) => {
      this.fetchMoment(item)
    })
  }

  copyToClickboard(params) {

    this.isEmail = (params == 'emailAddress') ? true : false

    this.isMobile = (params == 'mobileNumber') ? true : false


    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (params));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

}
