import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import {Hero} from './interfaces/hero.interface';
import {HeroService} from './hero.service';

@Component({
	selector: 'dashboard',
	template: `
		<h3>Dashboard</h3>
		<h4 class="center-align">Top Heroes</h4>
		<div class="container">
			<div class="row">
				<div class="col s4" *ngFor="#hero of heroes"
				(click)="goToHero(hero)">
					<div class="card teal lighten-5" style="cursor: pointer;	">
						<div class="card-content">
							<div class="card-title">
								{{ hero.name }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`
})
export class DashboardComponent implements OnInit {
	public heroes: Hero[];

	constructor(
		private _heroService: HeroService,
		private _router: Router
	) {}

	ngOnInit() {
		this._heroService.getHeroes()
			.then( heroes => {
				this.heroes = heroes.slice(1,4);
			});
	}

	goToHero(hero: Hero) {
		let link = ['HeroDetail', { id: hero.id }];
		this._router.navigate(link);
	}
}
