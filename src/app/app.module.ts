import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { ShopNowComponent } from './Pages/shop-now/shop-now.component';
import { SideBarComponent } from './Pages/shop-now/side-bar/side-bar.component';
import { CardioComponent } from './Pages/shop-now/cardio/cardio.component';
import { StrengthComponent } from './Pages/shop-now/strength/strength.component';
import { FreeWeightComponent } from './Pages/shop-now/free-weight/free-weight.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GymAccessComponent } from './Pages/shop-now/gym-access/gym-access.component';
import { CagesComponent } from './Pages/shop-now/cages/cages.component';
import { SportArtsComponent } from './Pages/shop-now/sport-arts/sport-arts.component';
import { WorkOutComponent } from './Pages/work-out/work-out.component';
import { ExerciseComponent } from './Pages/work-out/exercise/exercise.component';
import { AboutComponent } from './Pages/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ShopNowComponent,
    SideBarComponent,
    CardioComponent,
    StrengthComponent,
    FreeWeightComponent,
    ContactComponent,
    GymAccessComponent,
    CagesComponent,
    SportArtsComponent,
    WorkOutComponent,
    ExerciseComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
