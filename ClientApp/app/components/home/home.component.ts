import { HeroService } from './../../models/hero.service';
import { Component, OnInit} from '@angular/core';
import {Hero} from '../../models/hero';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers:[HeroService]
})
export class HomeComponent implements OnInit{
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService){}

    onClick(hero: Hero) :void{
        this.selectedHero = hero;
    }

    getHeroes(): void{
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void{
        this.getHeroes();
    }
}
