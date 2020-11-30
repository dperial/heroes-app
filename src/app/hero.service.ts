import { Injectable } from '@angular/core';
import { Hero } from './hero.interface';
import { HEROES } from './mock-hero.interface'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    // Send the message _after_ fetching the heroes
    this.messageService.addMessage('HeroService: Fetched heroes!!');
    return of(HEROES);
  }
  getHero(id:number): Observable<Hero> {
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  constructor( private messageService: MessageService,) { }
}
