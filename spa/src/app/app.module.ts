import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { DogsService } from './services/dogs.service';
import { DogComponent } from './components/dog/dog.component';
import { DogfinderComponent } from './components/dogfinder/dogfinder.component';
import { DogCardComponent } from './components/dog-card/dog-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DogsComponent,
    DogComponent,
    DogfinderComponent,
    DogCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
