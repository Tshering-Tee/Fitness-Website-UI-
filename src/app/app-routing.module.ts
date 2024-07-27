import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ShopNowComponent } from './Pages/shop-now/shop-now.component';
import { CardioComponent } from './Pages/shop-now/cardio/cardio.component';
import { StrengthComponent } from './Pages/shop-now/strength/strength.component';
import { FreeWeightComponent } from './Pages/shop-now/free-weight/free-weight.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { GymAccessComponent } from './Pages/shop-now/gym-access/gym-access.component';
import { CagesComponent } from './Pages/shop-now/cages/cages.component';
import { WorkOutComponent } from './Pages/work-out/work-out.component';
import { ExerciseComponent } from './Pages/work-out/exercise/exercise.component';
import { AboutComponent } from './Pages/about/about.component';

const routes: Routes = [
  {path:'', component: HomeComponent, title: 'Home Page'},
  {path:'home', component: HomeComponent, title: 'Home Page'},
  {path: 'shop-now', component: ShopNowComponent, title: 'Shop Page'},
  {path: 'cardio', component: CardioComponent, title: 'cardio-equipment'},
  {path: 'strength', component: StrengthComponent, title: 'strength-equipment'},
  {path: 'freeWeight', component: FreeWeightComponent, title: 'free-weight'},
  {path: 'gymAccess', component: GymAccessComponent, title: 'gym-Access'},
  {path: 'cages', component: CagesComponent, title: 'cages'},
  {path: 'contact', component: ContactComponent, title: 'contact-page'},
  {path: 'work-out', component: WorkOutComponent, title: 'work-out'},
  {path: 'exercise', component: ExerciseComponent, title: 'exercise'},
  {path: 'about', component: AboutComponent, title: 'about'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
