import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module'

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/common/navigation/navigation.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeComponent } from './components/body/home/home.component';
import { ToursComponent } from './components/body/tours/tours.component';
import { ExcursionsComponent } from './components/body/excursions/excursions.component';
import { EventsComponent } from './components/body/events/events.component';
import { WildlifeComponent } from './components/body/wildlife/wildlife.component';
import { GalleryComponent } from './components/body/gallery/gallery.component';
import { CultureComponent } from './components/body/culture/culture.component';
import { PlacesComponent } from './components/body/places/places.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    ToursComponent,
    ExcursionsComponent,
    EventsComponent,
    WildlifeComponent,
    GalleryComponent,
    CultureComponent,
    PlacesComponent
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
