import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router'

//Components
import { EventsComponent } from '../components/body/tours/tours-sub/events/events.component'
import { ExcursionsComponent } from '../components/body/tours/tours-sub/excursions/excursions.component'
import { PlacesComponent } from '../components/body/tours/tours-sub/places/places.component';
import { GalleryComponent } from '../components/body/gallery/gallery-main/gallery.component'
import { HomeComponent } from '../components/body/home/home-main/home.component'
import { ToursComponent } from '../components/body/tours/tours-main/tours.component'
import { AboutUsComponent } from '../components/body/about-us/about-us.component'
import { FooterComponent } from '../components/common/footer/footer.component'
import { NavigationComponent } from '../components/common/navigation/navigation.component'
import { GalleryModalComponent } from '../components/body/gallery/gallery-sub/gallery-modal/gallery-modal.component'


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'tours', component: ToursComponent },
  { path: 'about-us', component: AboutUsComponent },
  {
    path: 'gallery', component: GalleryComponent,
    children: [{ path: 'view', component: GalleryModalComponent }]
  },
  { path: '**', redirectTo: 'home' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
