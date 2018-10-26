import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private dogs: Dogs[] = [
    {
      name: 'Australian Cattle Dog',
      bio: 'The Australian Cattle Dog (ACD), or simply Cattle Dog, is a breed of herding dog originally developed in Australia for droving cattle over long distances across rough terrain. This breed is a medium-sized, short-coated dog that occurs in two main colour forms. It has either brown or black hair distributed fairly evenly through a white coat, which gives the appearance of a "red" or "blue" dog.',
      characteristics: ['calm', 'loud', 'smart', 'little' ],
      img: '/assets/img/scroll001.jpg'
    },
    {
      name: 'Affenpinscher',
      bio: 'The breed is German in origin and dates back to the seventeenth century. The name is derived from the German Affe (ape, monkey). The breed predates and is ancestral to the Griffon Bruxellois (Brussels Griffon) and Miniature Schnauzer.',
      characteristics: ['calm', 'smart', 'little' ],
      img: '/assets/img/scroll0010.jpg'
    },
    {
      name: 'Afghan Hound',
      bio: 'The Afghan Hound is a hound that is distinguished by its thick, fine, silky coat and its tail with a ring curl at the end. The breed is selectively bred for its unique features in the cold mountains of Afghanistan. Its local name is Tāžī Spay (Pashto: تاژي سپی‎) or Sag-e Tāzī (Dari Persian: سگ تازی). Other names for this breed are Kuchi Hound, Tāzī, Balkh Hound, Baluchi Hound, Barakzai Hound, Shalgar Hound, Kabul Hound, Galanday Hound or sometimes incorrectly African Hound.',
      characteristics: [ 'loud', 'smart', 'tall', 'active' ],
      img: '/assets/img/scroll002.jpg'
    }
  ];
  constructor() {
    console.log('service readuy to be used');
  }

  getDogs() {
    return this.dogs;
  }

  getDog( idx: string ) {
    return this.dogs[idx];
  }

  findDogs( term: string) {
    let foundDogs: Dogs[] = [];
    term = term.toLowerCase();
    for ( let dog of this.dogs ) {
      let dogName = dog.name.toLowerCase();
      if ( dogName.indexOf(term) >= 0) {
        foundDogs.push(dog);
      }
    }
    return foundDogs;
  }
}


export interface Dogs {
  name: string;
  bio: string;
  characteristics: any[];
  img: string;
}
