import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home-section-c',
  templateUrl: './home-section-c.component.html',
  styleUrls: ['./home-section-c.component.scss']
})
export class HomeSectionCComponent implements OnInit {

  row1: any = []
  row2: any = []
  row3: string = ''
  row4: any = []

  constructor() { }

  ngOnInit() {
    this.initUI()
  }

  initUI() {
    this.row1 = [
      {
        "name": "Diversity",
        "title": "Diversity Sri Lanka",
        "description": "Sri Lanka, Lapped by the warm Indian Ocean with goldi sandy beaches. Natural heaven with a landscape of misty covered Mountains, Rain Forests, Priceless Gemstones, Paddy Cultivation, Waterfalls, High Bio- divorsitical endemics related to wildlife & Marine parks. Culture & Heritage always become a major part of the country.",
        "src": "assets/img/site-images/home/diversity.jpg",
        "style": "badge-success"
      },
      {
        "name": "People",
        "title": "People Sri Lanka",
        "description": "The official name of the nation is the Democratic Socialist Republic of Sri Lanka. This Pearl of Asia covered by wonderful travel destinations with friendly smile people. Sri Lanka is a Multi-ethnic, multi- national and multi cultural country. Moreover the majority of Sinhala Buddhists, the nation also includes Sri Lankan Tamils, Tamils of Indian origin, Muslims and Burgers. ",
        "src": "assets/img/gallery/people/people-1.jpg",
        "style": "badge-rose"
      }
    ]

    this.row2 = [
      {
        "name": "Food",
        "title": "Food Sri Lanka",
        "description": "Sri Lankan food is exclusive for country traditions. Sri Lankan cuisine plays a fundamental role in the islanders’ life from the most famous Sinhala/Hindu New Year to normal day-to-day practices. They make Milk-rice and special sweets with Coconut milk, floor and honey at cultural festivals. It is recognized as one of the sixty-four types of art “Siu sata kalawa”. The curries come in many verities of colors and flavors blended in Sri Lanka. Hot spices have a great Ayurvedic value when used in curries. With a majority of country people, the rice and curry is the main food in Sri Lanka. Sri Lankan cuisine that different regions of country specialize in different types of dishes. The specialty in Sri Lankan food is that people used to cook same food by using different methods in different regions. Spices such as Cloves, Cardamoms, Nutmeg and Pepper are found in usually throughout Kandy and Mathale districts in central region of Sri Lanka. Sri Lankans also like to have drinks Tea and coffee.",
        "src": "assets/img/tours/people.jpg",
        "style": "badge-info"
      }
    ]

    this.row3 = "This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more."

    this.row4 = [
      {
        "icon": "location_on",
        "title": "Location",
        "content": "Sri Lanka formally Ceylon, officially the Democratic Socialist Republic of Sri Lanka, is an island country in south Asia, located in the Indian Ocean to the southwest of the Bay of Bengal and to the southeast of the Arabian Sea. The size of the island 65,610 SQ KM. The island is historically and culturally intertwined with the Indian subcontinent, but is geographically separated from the Indian subcontinent by Mannar and Palk Strait. It is located between 5´55, and 9´51 N and longitudes 79´41, and 81´53 E and has a maximum length of 268 miles (432 KM) and a maximum width of 139 miles (224 KM). At a crossroads of maritime routes traversing the Indian Ocean, Sri Lanka has also been exposed to cultural influences from other Asian Civilizations.  The legislative capital, Sri Jayewardenepura Kotte, is a suburb of the commercial capital and largest city, Colombo. Country has unitary multiparty republic with one legislative house “Parliament”.",
        "color": "icon-success",
        "style": "card-from-top"
      },
      {
        "icon": "filter_vintage",
        "title": "Beauty",
        "content": "Sri Lanka is Small Island of deep spirituality and serenity; people believe it’s a miracle of Indian Ocean because of the beauty of the paradise and it is a tropical island. Warm sun kissed beaches creates mix of opportunities which lead to the ultimate holiday destination. The diversity of temperatures, Flora and Fauna and scenery grab a large sense towards Sri Lanka. From the ancient time the travelers and the traders have paying attention to Sri Lanka. Present time visitors can travel the whole compact island within few days because it consists only 65,610 SQ KM. In Sri Lankan diversity classify for eight different products, Heritage, Beaches, Wildlife, Mind and body wellness, Scenic beauty, Festivals, Essence and Sports, Adventure. So without a doubt, a land like Sri Lanka cannot be found because it has something to offer for someone.",
        "color": "icon-rose",
        "style": ""
      },
      {
        "icon": "language",
        "title": "Many Identities",
        "content": "To express the richness beauty and the intensity of affection, since ancient period the visitors addressed the country as Thambapanni, Serandib, Ceylon, Tear drop of India, Island of Dharma and Pearl of the orient.",
        "color": "icon-info",
        "style": "card-from-top"
      }
    ]
  }

}
