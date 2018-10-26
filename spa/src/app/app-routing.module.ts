import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { DogComponent } from './components/dog/dog.component';
import { DogfinderComponent } from './components/dogfinder/dogfinder.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'dogs', component: DogsComponent },
  {path: 'dog/:id', component: DogComponent },
  {path: 'search/:term', component: DogfinderComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
