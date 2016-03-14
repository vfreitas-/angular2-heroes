import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

import {Hero} from './interfaces/hero.interface';

import {HeroService} from './hero.service';

import {HeroDetailComponent} from './hero-detail.component';

@Component({
    selector: 'heroes',
	directives: [HeroDetailComponent],
    template: `
		<h3>Heroes</h3>
		<div class="row">
			<div class="col s12">
				<table class="striped centered">
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
						</tr>
					</thead>
					<tbody>
						<tr *ngFor="#hero of heroes" (click)="goToHero(hero)"
						[class.teal]="selectedHero === hero"
						[class.lighten-4]="selectedHero === hero">
							<td>{{ hero.id }}</td>
							<td>{{ hero.name }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	`
})
export class HeroComponent implements OnInit {
	public heroes: Hero[];
	selectedHero: Hero;

	constructor(
		private _heroService: HeroService,
		private _router: Router
	) {

	}

	ngOnInit() {
		this.getHeroes();
	}

	getHeroes() {
		this._heroService.getHeroes()
			.then( heroes => {
				this.heroes = heroes;
			});
	}

	goToHero(hero: Hero) {
		let link = ['HeroDetail', { id: hero.id }];
		this._router.navigate(link);
	}
}
