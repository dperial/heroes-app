import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // heroes = HEROES;

  heroes: Hero[] = [];
  selectedHero?: Hero;
    /* hero: Hero = {
    id: 1,
    name: "Windstorm"
  }; */
  constructor( private heroService: HeroService, private messageService: MessageService,) { }

  ngOnInit(): void {
    this.getHeroes();
  }
/*   onSelect(hero: Hero): void {
    this.selectedHero = hero;
  } */

  // Replace with the new One
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.addMessage(`HeroesComponent: Selected hero id=${hero.id} has been selected!!`)
  }
/*   getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  } */
  // Replace the old one with the new One
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
