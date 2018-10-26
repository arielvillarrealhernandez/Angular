import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { DogsService } from '../../services/dogs.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html'
})
export class DogComponent implements OnInit {
  dog: any = {};
  constructor(private activatedRouter: ActivatedRoute,
              private dogService: DogsService) {
    this.activatedRouter.params.subscribe( params => {
      this.dog = dogService.getDog(params.id);
      console.log(this.dog);
    }
    );
  }
  ngOnInit() {
  }

}
