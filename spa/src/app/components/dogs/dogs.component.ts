import { Component, OnInit } from '@angular/core';
import { DogsService, Dogs } from '../../services/dogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html'
})
export class DogsComponent implements OnInit {
  dogs: Dogs[] = [];
  constructor( private _dogsService: DogsService,
               private router: Router
              ) {
  }

  ngOnInit() {
    this.dogs = this._dogsService.getDogs();
    console.log(this.dogs, 'ALL DOGS');
  }

  readDog(idx: number) {
     this.router.navigate(['/dog', idx]);
  }

}
