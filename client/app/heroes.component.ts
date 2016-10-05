import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from './hero.service'
import { Router } from '@angular/router'

@Component({
    selector: 'my-heroes',
    templateUrl: 'templates/heroes.component.html',
    styleUrls: ['styles/heroes.component.css']
})
export class HeroesComponent implements OnInit{
    
    heroes: Hero[];
    selectedHero: Hero;
    
    constructor(
    	private heroService: HeroService,
        private router: Router
    ){}
    
    ngOnInit(): void {
        this.getHeroes();
    }
    
    getHeroes(): void{
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    
    goToDetail(): void {
    	this.router.navigate(['detail', this.selectedHero.id])
    }
}

