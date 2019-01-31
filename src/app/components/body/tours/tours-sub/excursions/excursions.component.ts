import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excursions',
  templateUrl: './excursions.component.html',
  styleUrls: ['./excursions.component.scss']
})
export class ExcursionsComponent implements OnInit {

  searchText: String
  excursionCategories: { "src": string; "title": string; "subDescription": string; "mainDescription": string[]; }[];
  selectedItem: { "src": string; "title": string; "subDescription": string; "mainDescription": string[]; }

  constructor() { }

  ngOnInit() {
    this.excursionCategories = [
      {
        src: "/assets/img/site-images/JPEG/kandycity_tour.jpg",
        title: "Kandy City Tour",
        subDescription: "Kandy, one of the most eye pleasuring town that is famous as the last historical kingdom of Sri Lanka",
        mainDescription:
          ["Kandy, one of the most eye pleasuring town that is famous as the last historical kingdom of Sri Lanka which is situated attaching to Hanthana and Bahirawa-Kanda Mountain. The Mahaweli River, which is floating around the kandy town and the Kandy lake which situated in the middle of the town bring a fantastic view to the town.",
            "The historical and sacred “Dalanda Maligawa” which was built by King Wimaladharmasuriya (1st) in 1595 can be found in the heart of the town. The cultural background, religious background, carvings, architecture and paintings have added some royalty to Kandy.",
            "After visiting the Temple of Tooth Relic in the morning, the freshness of the peradeniya Royal Botanical Garden can be felt by seeing flora and that belong to many species over 7000. Not only this but also travelers can get a marvelous experience of seeing endemic plants to Sri Lanka, Foreign plants, spices, fruits, vegetables, rare medical plants and beautiful orchid collection while walking in the Botanical Garden, a paradise to travelers.",
            "The international mark of Sri Lanka is Ceylon tea, you can enjoy the taste of Ceylon tea and you will be able to walk across beautiful tea estates and witness the tea producing process while you travel in upcountry and this gives you totally different experience to your life.",
            "In this tour you will get a chance to know about different types of skill based professions which are specialized among kandyan people, one of them is wood carvings. Apart from this, you will be able to know about the very famous gem industry in Sri Lanka."
          ]
      },
      {
        src: "/assets/img/site-images/JPEG/ancientcity_anuradhapura_tour.jpg",
        title: "Ancient City Tour – Anuradhapura",
        subDescription: "Anuradhapura, the first Historical Kingdom of Sri Lanka in 04th century. It is in North Central Province",
        mainDescription: 
        [
          "Anuradhapura, the first Historical Kingdom of Sri Lanka in 04th century. It is in North Central Province , 205 km from Colombo. This ancient kingdom was built based on Malwathu Oya” and this kingdom is one of the most prominent one among world’s oldest kingdom. This kingdom has a UNESCO WORLD HERITAGE Site also.",
          "This is a sacred town where the sacred “Jayasrimaha bodhi” or sacred “Esathu Tree” is situated in. this sacred plant was brought from India, this sacred tree was helping Lord Buddha to attain the enlightment in Buddha’s Buddhahood. This was planted in 288BC. According to the records this was the oldest plant planted by a man.",
          "After visiting Jayasiri Maha Bodhi, another important sacred place can be visited, it is “Ruwanweli Maha seya”. This is the most important pagoda which belongs to the ancient “maha viharaya”. Ruwanweli Seya was built by “King Dutugamunu”. This is 300 ft in height (92 m) and 950 ft in the diameter (292 m). This can be named as the highest monument among the remaining monuments in the world. This is full of architectural qualities.",
          "“Isurumuni Viharaya” is another important place to visit, that was built by King Dewnampiyatissa who ruled Sri Lanka at the very beginning. This viharaya famous as a cave viharaya and there is a mind blowing stone carving of a lovely called “Isurumuni Pem Yuwala”. The carvings in this cave belong to Guptha Art of 06th Century. You will be able to know about water management systems, in beautifying gardens by seeing the big gardens and water gardens in here.",
          "After having a delicious Sri Lankan launch we are going to a must see place in Anuradhapura name as ‘Mihinthalaya”. It has long history which goes to 247 B.C. This is full of letters on stones which give an archeological importance.",
          "It is our duty to give the chance to visit miraculous places in this ancient city."
        ]
      },
      {
        src: "/assets/img/site-images/JPEG/threeTemple_tour.jpg",
        title: "Three Temple & Pinnawala Elephant Orphanage Visit",
        subDescription: "Gampola Kindgdom is another oldest and ancient kingdom in Sri Lanka. In here we can visit the most famous temple",
        mainDescription: 
        [
          "Gampola Kindgdom is another oldest and ancient kingdom in Sri Lanka. In here we can visit the most famous temple triplet among travelers named as “Embakka, Lankathilaka and Gadaladeniya vihara”.",
          "Possibly, Gampola’s Legendry attraction, these three temples are a short distance from each other and sometimes referred to as the “three temple loop”. The temples serve as a living testimony to Sri Lankas Buddhist heritage, history and exceptional craftsmanship. Each temple holds a considerable amount of historical information of the ancient kingdom’s era carved mostly in stone.",
          "The tour start off with Gadaladeniya viharaya, a temple build by exclusively by stone by gampola’s “King Buvanekabahu (IV)”. Settled on a rock cliff, the temple exhibits a combination of Dravidian and Sinhalese architecture styles and offer its visitors a panoramic view of the countryside. Then enjoy a ride though the foundations of Buddhism and its significance in Sri Lanka. Before making your way to Embakka, a Hindu shrine, stopover at a plantation that grows tea, coffee and pepper to get a glimpse of the Island’s numerous cultivations. This particular shrine is renowned for its intricately carved pillars and its high pitched roof. Embakka, consists of three sections, the “sanctum of Garagha, the Dancing Hall and the Drummers Hall”.",
          "After you can share the experience with us, visiting Pinnawala Elephant Orphanage was established by the Sri Lankan Department of wildlife conservation in 1975 for feeding and providing care and sanctuary to orphaned baby elephants that were found in the wild. Pinnawala has the largest herd of captive elephants in the world."
        ]
      },
      {
        src: "/assets/img/site-images/JPEG/cultural_trails.jpg",
        title: "Cultural Trails",
        subDescription: "This has become the worlds’ 08th wonder and this is a UNESCO World Heritage Site. Called “Sinha-Giriya",
        mainDescription: 
        [
          "This has become the worlds’ 08th wonder and this is a UNESCO World Heritage Site. Called “Sinha-Giriya” or Lion Rock was built in 477-495 CE. Sigiriya is one of the most prominent among ancient kingdoms in Sri Lanka. This creation is a collection of irrigation technology, fortress creating techniques, garden building technology, and pre- historical era of Sigiriya. The “Mirror Wall” Grafities, famous Sigiri Frescoes and the long history of Sigiri is the witness for Sri Lankans’ skills and abilities. Sigiriya was a protective fortress of “King Kashyapa” and he built this with deep water drenches, Ramparts, and Hidden Caves. This is 200 meters in height (600 ft). Sigiriya was a castle yard earlier and later it has become a Buddhist Monastery.",
          "Sigiriya and Dambulla villages are providing evidence for pre- historic areas of Sri Lanka. When you travel around Sigiriya, you will be able to aware about village life, culture and moral connections of dwellers.",
          "“Rangiri Dambulu Raja Maha Vihara”(the Golden Temple of Dambulla) is the other famous place you must visit which is situated in dambulla. This cave temple is spread in 2100 square meters. Since it has the largest and preservative cave temple complex in Sri Lanka it is well known. It has mind blowing cave frescoes, Buddha statues, Gods and kings statues."
        ]
      },
      {
        src: "/assets/img/site-images/JPEG/sigiriya_tour.jpg",
        title: "Pidurangala, Dambulla & Village Tour in Sigiriya",
        subDescription: "Pidurangala viharaya is situated iin Sigiriya kingdom. And it is 340 m height from the Sea level. This is a Buddhist",
        mainDescription: 
        [
          "Pidurangala viharaya is situated iin Sigiriya kingdom. And it is 340 m height from the Sea level. This is a Buddhist sacred place which has been built mountain area. This can be found in the north from Sigiriya. Pidurangala Temple has been offered to Buddhist monks in the ancient time. Climbing to the Pidurangala rock is more than strenuous than climbing Sigiriya.",
          "Visit Hiriwadunna, a village where trees outnumber people 01 to 100 and enjoy a trek across natural trails, a catamaran boat trip and a bullock cart ride. While doing village tour, see the views of Sigiriya in the distance and spot a few unique species of birds as the boat is being paddled across the water. Upon reaching the shore you will be escorted to the house of a village local where you authentic Sri Lankan lunch will be cooked from freshly grown produce.",
          "“Rangiri Dambulu Rja Maha Vihara” (the Golden Temple of Dambulla) is the other famous place you must visit which is situated in Dambulla. This cave temple is spread in 2100 square meters. Since it has the largest and preservative cave temple complex in Sri Lanka it is well known. It has mind-blowing Cave Frescoes, Buddha Statues, Gods and Kings Statues."
        ]
      },
      {
        src: "/assets/img/site-images/JPEG/kandy_hideout_tour.jpg",
        title: "Kandy Hide-Out Trails",
        subDescription: "The first Agro Technology Park situated inn Kandy; UNESCOO World Heritage city is a place which depicts ancient",
        mainDescription: 
        [
          "The first Agro Technology Park situated inn Kandy; UNESCOO World Heritage city is a place which depicts ancient agricultural facts in Sri Lanka, the methods of cultivation, new trends of current agriculture. Traditional garden, ancient & traditional irrigation technology, Sri Lankan planting items, veterinary resources and bee hive controlling can be seen in this park.",
          "Gampola Kindgdom is another oldest and ancient kingdom in Sri Lanka. In here we can visit the most famous temple triplet among travelers named as “Embakka, Lankathilaka and Gadaladeniya vihara”.",
          "Possibly, Gampola’s Legendry attraction, these three temples are a short distance from each other and sometimes referred to as the “Three Temple Loop”. The temples serve as a living testimony to Sri Lankans Buddhist heritage, history and exceptional craftsmanship. Each temple holds a considerable amount of historical information of the ancient kingdom’s era carved mostly in stone.",
          "The tour start off with Gadaladeniya viharaya, a temple build by exclusively by stone by gampola’s “King Buvanekabahu (IV)”. Settled on a rock cliff, the temple exhibits a combination of Dravidian and Sinhalese architecture styles and offer its visitors a panoramic view of the countryside. Then enjoy a ride though the foundations of Buddhism and its significance in Sri Lanka. Before making your way to Embakka, a Hindu shrine, stopover at a plantation that grows tea, coffee and pepper to get a glimpse of the Island’s numerous cultivations. This particular shrine is renowned for its intricately carved pillars and its high pitched roof. Embakka, consists of three sections, the “sanctum of Garagha, the Dancing Hall and the Drummers Hall”."
        ]
      },
      {
        src: "/assets/img/site-images/JPEG/nuwaraeliya_tour.jpg",
        title: "Nuwara Eliya City Tour",
        subDescription: "Nuwara Eliya known as “Little England” is a city in the Tea Country, hills of Central Sri Lanka. Its name means",
        mainDescription: 
        [
          "Nuwara Eliya known as “Little England” is a city in the Tea Country, hills of Central Sri Lanka. Its name means “City on the Plain” (Table Land) or “City of Light”. The city is the administrative capital of Nuwara Eliya District. It is at an altitude of 1868 m (6128 ft) and is considered to be the most important location for tea production in Sri Lanka. Nuwara Eliya is known for its temperate, cool climate, - the coolest area in Sri Lanka.",
          "The train trip from Kandy to hill country (04 Hours Journey) in Sri Lanka, in considered to be one of the most beautiful train trips in the world. The scenery from the train is breathtaking like a green carpet of tea bushes rolling by, with colorful sari-dressed tea pickers popping out of the sea of green.",
          "Just 10 minutes ride from Nanu Oya train station, you will reach to Nuwara Eliya city. The freshness of vegetables and fruits which are native to upcountry can be tasted from the delicious, mouth watering lunch.",
          "After lunch your chauffeur guide will be take you to the “Hakgala Botanical Garden”. Hakgala Gardens’ is a delightful little botanical garden, and is famed for its roses and ferns. The name means “Jaw-Rock” and, according to legend, was carried over from the Himalayas in the jaw of the Monkey God Hanuman.",
          "After spend great day in Nuwara Eliya city, on the way to back you can visit “Ramboda waterfall”. Over one hundred Waterfalls in Sri Lanka, Ramboda Fall is 11th highest waterfall in Sri Lanka, and 109 m (358 ft) high. Altitude of the falls is 945 m (3100 ft)",
          "And on the way back feel the different experience with misty sceneries of Tea Kingdom, Hill Country.",
          "Optional: - you have another selection if you wish, you can walk in Hakgala Garden or otherwise you can select “Gregory Park”. Gregory Lake is a reservoir in heart of the tea country. Lake Gregory was constructed during the period of British Governor Sir William Gregory in 1873. The Lake and Park surrounding area make up the Gregory Lake Area."
        ]
      }
    ]

    this.selectedItem = this.excursionCategories[0]

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
      return this.excursionCategories;
    }
    if (this.searchText) {
      return this.filterIt(this.excursionCategories, this.searchText.toLowerCase());
    }
  }

  excursionsDetails(item) {
    this.selectedItem = item
  }

}
