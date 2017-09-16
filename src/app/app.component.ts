import {Component, OnInit} from '@angular/core';
import {Hero} from './modules/hero';
import {HeroService} from './services/hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {

  }


  ngOnInit(): void {
    this.getHeroes();
  }

  onSelected(hero: Hero) {
    this.selectedHero = hero;
  }


  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }


}

