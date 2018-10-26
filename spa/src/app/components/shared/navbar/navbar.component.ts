import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../../services/dogs.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _dogsService: DogsService,
    private router: Router) { }

  ngOnInit() {
  }

  findDog(word: string) {
    this.router.navigate(['/search', word]);
  }
}
