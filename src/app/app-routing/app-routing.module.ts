import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router'

//Components
import { CultureComponent } from '../components/body/culture/culture.component'
import { EventsComponent } from '../components/body/events/events.component'
import { ExcursionsComponent } from '../components/body/excursions/excursions.component'
import { GalleryComponent } from '../components/body/gallery/gallery.component'
import { HomeComponent } from '../components/body/home/home.component'
import { ToursComponent } from '../components/body/tours/tours.component'
import { WildlifeComponent } from '../components/body/wildlife/wildlife.component'
import { FooterComponent } from '../components/common/footer/footer.component'
import { NavigationComponent } from '../components/common/navigation/navigation.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'culture', component: CultureComponent},
  { path: 'wildlife', component: WildlifeComponent},
  { path: 'gallery', component: GalleryComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
