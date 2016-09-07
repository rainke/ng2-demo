import { Component } from '@angular/core';
import {Router } from '@angular/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
   styleUrls:['app/heroes.component.css'],
   providers:[HeroService]
})
export class HeroesComponent implements OnInit {
    
    selectedHero: Hero;
    heroes: Hero[];
    constructor(
      private router: Router,
      private heroService: HeroService,
    ) {
      
    }
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }
    getHeroes():void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit():void {
      this.getHeroes();
    }
    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedHero.id]);
    }
}

