import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';
import {Hero} from './interfaces/hero.interface';

@Injectable()
export class HeroService {

	getHero(id: number) {
		return Promise.resolve(HEROES)
			.then(heroes => {
				return heroes.filter(hero => {
					return hero.id === id
				})[0];
			});
	}

	getHeroes() {
		return Promise.resolve(HEROES);
	}

	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve =>
			setTimeout(()=>resolve(HEROES), 2000)
		);
	}


}
