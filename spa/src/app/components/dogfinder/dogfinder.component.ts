import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DogsService } from '../../services/dogs.service';
@Component({
  selector: 'app-dogfinder',
  templateUrl: './dogfinder.component.html',
  styles: []
})
export class DogfinderComponent implements OnInit {
  dogs: any[];
  term: string;
  constructor(private activatedRoute: ActivatedRoute,
              private _dogService: DogsService,
              private router: Router ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.term = params['term'];
      this.dogs = this._dogService.findDogs(params['term']);
    });
  }
  readDog(idx: number) {
    this.router.navigate(['/dog', idx]);
  }
}
