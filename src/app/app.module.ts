import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module'

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/common/navigation/navigation.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeComponent } from './components/body/home/home-main/home.component';
import { ToursComponent } from './components/body/tours/tours-main/tours.component';
import { ExcursionsComponent } from './components/body/tours/tours-sub/excursions/excursions.component';
import { EventsComponent } from './components/body/tours/tours-sub/events/events.component';
import { GalleryComponent } from './components/body/gallery/gallery.component';
import { PlacesComponent } from './components/body/tours/tours-sub/places/places.component';

import { HomeSectionAComponent } from './components/body/home/home-sub/home-section-a/home-section-a.component';
import { HomeSectionBComponent } from './components/body/home/home-sub/home-section-b/home-section-b.component';
import { HomeSectionCComponent } from './components/body/home/home-sub/home-section-c/home-section-c.component';
import { HomeSectionDComponent } from './components/body/home/home-sub/home-section-d/home-section-d.component';
import { HomeSectionEComponent } from './components/body/home/home-sub/home-section-e/home-section-e.component';
import { AboutUsComponent } from './components/body/about-us/about-us.component';

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
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
