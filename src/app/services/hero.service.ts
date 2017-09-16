import {Injectable} from '@angular/core';
import {Hero} from '../modules/hero';
import {HEROES} from '../share/mock-heroes';

@Injectable()
export class HeroService {

  constructor() {
  }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

}
