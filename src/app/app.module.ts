import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing/app-routing.module'

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/common/navigation/navigation.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeComponent } from './components/body/home/home-main/home.component';
import { ToursComponent } from './components/body/tours/tours-main/tours.component';
import { ExcursionsComponent } from './components/body/tours/tours-sub/excursions/excursions.component';
import { EventsComponent } from './components/body/tours/tours-sub/events/events.component';
import { GalleryComponent } from './components/body/gallery/gallery-main/gallery.component';
import { PlacesComponent } from './components/body/tours/tours-sub/places/places.component';
import { GalleryModalComponent } from './components/body/gallery/gallery-sub/gallery-modal/gallery-modal.component'

import { HomeSectionAComponent } from './components/body/home/home-sub/home-section-a/home-section-a.component';
import { HomeSectionBComponent } from './components/body/home/home-sub/home-section-b/home-section-b.component';
import { HomeSectionCComponent } from './components/body/home/home-sub/home-section-c/home-section-c.component';
import { HomeSectionDComponent } from './components/body/home/home-sub/home-section-d/home-section-d.component';
import { HomeSectionEComponent } from './components/body/home/home-sub/home-section-e/home-section-e.component';
import { AboutUsComponent } from './components/body/about-us/about-us.component';
import { GallerySectionAComponent } from './components/body/gallery/gallery-sub/gallery-section-a/gallery-section-a.component';
import { GallerySectionBComponent } from './components/body/gallery/gallery-sub/gallery-section-b/gallery-section-b.component';
import { GallerySectionCComponent } from './components/body/gallery/gallery-sub/gallery-section-c/gallery-section-c.component';
import { GallerySectionDComponent } from './components/body/gallery/gallery-sub/gallery-section-d/gallery-section-d.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    ToursComponent,
    ExcursionsComponent,
    EventsComponent,
    GalleryComponent,
    PlacesComponent,
    HomeSectionAComponent,
    HomeSectionBComponent,
    HomeSectionCComponent,
    HomeSectionDComponent,
    HomeSectionEComponent,
    AboutUsComponent,
    GallerySectionAComponent,
    GallerySectionBComponent,
    GallerySectionCComponent,
    GallerySectionDComponent,
    GalleryModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAebpQM0Oo7SkefxRPYeZ95MHznCVC3Pn0'
    }),
    NgCircleProgressModule.forRoot({
      radius: 40,
      backgroundPadding: 7,
      backgroundStrokeWidth: 0,
      space: -3,
      outerStrokeWidth: 3,
      outerStrokeColor: "#808080",
      innerStrokeWidth: 3,
      innerStrokeColor: "#e7e8ea",
      titleColor: "#ffffff",
      titleFontSize:"16",
      animationDuration: 1000,
      toFixed: 0,
      showTitle: true,
      showUnits: false,
      showSubtitle: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





// ,
// backgroundPadding: 9,
// radius: 64,
// ,
// ,
// ,
// outerStrokeWidth: 4,
// outerStrokeColor: "#808080",
// innerStrokeColor: "#e7e8ea",
// innerStrokeWidth: 4,
// title: [],
// titleFontSize: "12",
// subtitleFontSize: "20",
// imageHeight: 140,
// animationDuration: 300,
