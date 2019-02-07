import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  specialPackages: any = []
  selectedPackage: any = {}

  constructor() { }

  ngOnInit() {
    this.initUI()
  }

  initUI() {

    this.selectedPackage = {
      "title": "",
      "subtitle": "",
      "content": "",
      "description": []
    }

    this.specialPackages = [
      {
        "title": "Beach and Cold",
        "subtitle": "Spend Amazing 5 Nights and 6 Days",
        "content": "Some description",
        "description": [
          { "day": "Day 1", "workout": "On arrival and you will meet our English speaking guide who meet and greet at the Bandaranayke International Airport and transfer to Negombo. Check- in to hotel and you will spend at leisure in the hotel", "stayAt": "Overnight Stay at Negombo", "roomType": "Deluxe Room" },
          { "day": "Day 2", "workout": "After breakfast proceed to Tangthalle and check-in to hotel and you will enjoy a day of relaxing by the beautiful beaches of the south. Enjoy a cool drink and unshakable sound of the waves touching or bathing and enjoy a beautiful sunset", "stayAt": "Overnight stay at Tangalle", "roomType": "Deluxe Room" },
          { "day": "Day 3", "workout": "After an early breakfast we depart from the hotel around 0730HRS towards Mirissa to embark on a whale watching tour. The duration of the whale watching tour depends on spotting the whales usually it is up to 4 hours. You will be provided with adequate amount of water. Soft drinks and snack during the activity", "stayAt": "Overnight stay at Tangalle", "roomType": "Deluxe Room" },
          { "day": "Day 4", "workout": "After Breakfast leave to Hatton, Dickoya and check –in hotel at an amazing colonial bungalow in the central highlands. Enjoy with cool climate and nice cup of tea", "stayAt": "Overnight stay at colonial Bungalow", "roomType": "Deluxe Room" },
          { "day": "Day 5", "workout": "This morning, we take tour with the resident naturalists and do the Tea Experience which will give an insight to the world’s best grown tea and processing", "stayAt": "Overnight stay at colonial Bungalow", "roomType": "" },
          { "day": "Day 6", "workout": "After breakfast we proceed to the airport in time to connect with the international flight for departure", "stayAt": "", "roomType": "" }
        ]
      },
      {
        "title": "Observed Thambapanni",
        "subtitle": "Spend 5 Nights and 6 Days",
        "content": "Some description",
        "description": [
          { "day": "Day 1", "workout": "Upon arrival and you will meet our English speaking guide who meet and greet at the Bandaranayke International Airport and transfer to Negombo. Check- in to hotel and you will spend at leisure in the hotel", "stayAt": "Overnight Stay at Negombo", "roomType": "Deluxe Room" },
          { "day": "Day 2", "workout": "After breakfast proceed to travel further towards the Northern province and visit the Ruins of Anuradhapura is a UNESCO World Heritage Site located in the north central part of the Island was the first capital (5th century BC - 9th century AD), the centre of the island's Buddhist civilization and undoubtedly the grandest city of ancient Sri Lanka. In antiquity and the interest, it is the equal of any ancient 'buried city' in the world", "stayAt": "Overnight Stay at Anuradhapura", "roomType": "Deluxe Room" },
          { "day": "Day 3", "workout": "Breakfast at the hotel Today we travel to Sigiriya and check-in to hotel. You will take a rest couple of hours and in evening you will visit Sgiriya Lion Rock which is one of the most outstanding of architectural wonders in Sri Lanka. Sigiriya is one of the most outstanding architectural wonders in Sri Lanka", "stayAt": "Overnight Stay at Sigiriya", "roomType": "Deluxe Room" },
          { "day": "Day 4", "workout": "After breakfast proceed to Village safari at Hiriwaduna village and you will take an amazing experience of bullock cart ride and catamaran boat ride, transfer to Polonnaruwa and visit the ruins. Polonnaruwa another UNESCO world heritage site is the medieval capital of Sri Lanka. On Completion transfer to Kandy an en route visit Dambulla Cave Temple was first constructed by King Valagambahu and is now considered a UNESCO world heritage site", "stayAt": "Overnight Stay at Kandy", "roomType": "Deluxe Room" },
          { "day": "Day 5", "workout": "After breakfast you will leave towards to Temple of the tooth, is the most important place for the present Buddhist because it is the final resting place of the sacred tooth relic of Buddha known as “Sri Dalada Maligawa.” It is famous for its carvings and the beautiful art that is unique to Sri Lanka", "stayAt": "Overnight Stay at Kandy", "roomType": "Deluxe Room" },
          { "day": "Day 6", "workout": "Your breakfast on this day is included, however depending on your departure flight time leave to the Airport", "stayAt": "", "roomType": "" }
        ]
      },
      {
        "title": "Animal Habitat",
        "subtitle": "7 Nights and 8 Days",
        "content": "Some description",
        "description": [
          { "day": "Day 1", "workout": "On arrival and you will meet our English speaking guide who meet and greet at the Bandaranayke International Airport and transfer to Negombo. Check- in to hotel and you will spend at leisure in the hotel", "stayAt": "Overnight Stay at Negombo", "roomType": "Deluxe Room" },
          { "day": "Day 2", "workout": "After breakfast will be proceeded to Wilpattu and check-in to camp site. In evening you will transfer to Wilpattu National Park for the evening safari. Wilpattu National Park is the largest national park in Sri Lanka. It is home to many diverse forest types. It was one of the first parks to open in Sri Lanka, and thus has a rich heritage. There are over 30 recorded mammalian species inside Wilpattu", "stayAt": "Overnight Stay at Wilpattu", "roomType": "Camp site" },
          { "day": "Day 3", "workout": "Today we will embark on a full day safari at the Wilpattu National Park, we will leave the campsite around 0600HRS. You will be served a packed breakfast and lunch during the safari. We will arrange plenty of soft drinks and water to keep you hydrated, where you can enjoy the real wilderness of the country", "stayAt": "Overnight Stay at Wilpattu", "roomType": "Camp site" },
          { "day": "Day 4", "workout": "After breakfast we will leave towards the hill country of Sri Lanka an en route visit Matale Spice gardens and check in to hotel and evening you will visit Ceremony at Temple of Tooth Relic", "stayAt": "Overnight Stay at Kandy", "roomType": "Deluxe Room" },
          { "day": "Day 5", "workout": "Breakfast at the hotel you will proceed to Udawalawe and check –in to the hotel we will start our first safari to Udawalawe National Park", "stayAt": "Overnight Stay at Udawalawe", "roomType": "Deluxe Room" },
          { "day": "Day 6", "workout": "Today we will have our breakfast boxes and leave the hotels around 0600HRS to experience a morning safari at the Udawalawe National Park", "stayAt": "Overnight Stay at Udawalawe", "roomType": "Deluxe Room" },
          { "day": "Day 7", "workout": "After a leisurely breakfast, check-out and transfer to Colombo with brief tour of Colombo before checking-in to hotel for the last night in Sri Lanka", "stayAt": "Overnight Stay at Colombo", "roomType": "Deluxe Room" },
          { "day": "Day 8", "workout": "After breakfast we proceed to the airport in time to connect with the international flight for departure.", "stayAt": "Overnight Stay at Colombo", "roomType": "Deluxe Room" }
        ]
      },
      {
        "title": "Glorious Honeymoon",
        "subtitle": "11 Nights 12 Days",
        "content": "Some description",
        "description": [
          { "day": "Day 1", "workout": "On arrival you will meet our Chauffeur/ Guide, who meet and greet at the Topaz Lounge at the Bandaranaike International Airport. You will be served Tea/ Coffee with some snacks until your baggage arrives. Transfer to Colombo and check in to hotel", "stayAt": "Overnight Stay at Colombo", "roomType": "Deluxe Room" },
          { "day": "Day 2", "workout": "This morning we will be at leisure and explore the city on your own if possible and we will go to MRS. Mohara Dole’s residence for to experience a Sri Lankan culinary lesson and to enjoy a delicious Lunch cooked by yourself and you will doing some shopping mall at  the many shopping complex  enjoy a night cycle ride", "stayAt": "Overnight Stay at Colombo", "roomType": "Deluxe Room" },
          { "day": "Day 3", "workout": "After breakfast you will proceed to Sigiriya and you will spend the day relaxing by the hotel pool or exploring sites", "stayAt": "Overnight Stay at Sigiriya", "roomType": "Deluxe Room" },
          { "day": "Day 4", "workout": "In this morning you will do romantic hot air balloon ride and you will capture atmosphere sky and most beautiful landscapes. After you will leave to Minneriya National Park for doing a safari with private safari jeep", "stayAt": "Overnight Stay at Sigiriya", "roomType": "Deluxe Room" },
          { "day": "Day 5", "workout": "After breakfast you will proceed to Sigiriya Lion Rock and transfer to Hunnasgiriya and you will visit Hunnas falls which is most popular famous through the romantic couples. En route visit Spice tour at Matale", "stayAt": "Overnight Stay at Kandy", "roomType": "Deluxe Room" },
          { "day": "Day 6", "workout": "Enjoy a romantic early morning you will do in a city tour of Kandy a lovely city, the Hill Capital and last stronghold of the Sinhala Kings retains an aura of grandeur, which time has not affected. Encircled by hills, with a tranquil lake in its center, it is the site of the renowned 'Temple of the Tooth'. On completion you will visit Peradeniya  Royal Botanical Garden, Peradeniya is one of the best botanical gardens in Sri Lanka, and one of the most beautiful in Asia. Spend the rest of your day relaxing by the hotel pool", "stayAt": "Overnight Stay at Kandy", "roomType": "Deluxe Room" },
          { "day": "Day 7", "workout": "This morning will proceed further up in the Hill Country towards Hatton and we use the railway for this transfer to give you an unforgettable experience an amazing views on route. Upon arrival in Hatton, you will be taken to your Hotel and the rest of the day will be spent at leisure. However, you have the option to enjoy various activities provided by your hotel", "stayAt": "Overnight Stay at Hatton", "roomType": "Deluxe Room" },
          { "day": "Day 8", "workout": "After breakfast at around  we will visit the Dunkeld Tea Factory and experience how the world’s finest tea is being produced. A resident planter will take you though from the history to picking tea leave to how the final product is made. You also get the opportunity to enjoy a cup of fresh tea", "stayAt": "Overnight Stay at Hatton", "roomType": "Deluxe Room" },
          { "day": "Day 9", "workout": "After breakfast we leave el towards Tangalle. Upon arrival in Tangalle, check in to your hotel and the rest of the day will be spent at leisure", "stayAt": "Overnight Stay at Tangalle", "roomType": "Deluxe Room" },
          { "day": "Day 10", "workout": "Breakfast at hotel. The entire day is kept to relax by the beach or swimming pool", "stayAt": "Overnight Stay at Tangalle", "roomType": "Deluxe Room" },
          { "day": "Day 11", "workout": "After a late breakfast we will travel towards Galle. Upon arrival in Galle, check in to your hotel and we start a walking tour of the Galle Fort. The port of Galle, thought by some to be the Biblical city of Tarshish, splendidly illustrates the solidity of the Dutch presence in Sri Lanka", "stayAt": "Overnight Stay at Galle", "roomType": "Deluxe Room" },
          { "day": "Day 12", "workout": "After breakfast. We check out from the hotel and travel to the Bandaranaike international airport in time for your flight", "stayAt": "", "roomType": "" }
        ]
      }
    ]

  }

  setSelectedPackages(item) {
    this.selectedPackage = item
  }

}
