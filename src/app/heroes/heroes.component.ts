import { Component, OnInit } from '@angular/core';
import {Hero} from '../modules/hero';
import {HeroService} from '../services/hero.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;


  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelected(hero: Hero) {
    this.selectedHero = hero;
  }


  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }


  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
