import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import { HeroService } from './hero.service';
import {Hero} from './interfaces/hero.interface';

@Component({
	selector: 'hero-detail',
	template: `
		<div *ngIf="hero">
			<h3>{{ hero.name }} details!</h3>
			<div><label>id: </label>{{ hero.id }}</div>
			<div class="input-field">
				<input [(ngModel)]="hero.name"
				id="name"/>
				<label class="active" for="name">name: </label>
			</div>
		</div>
		<a class="waves-effect waves-light btn"
		(click)="goBack()">
			Go Back
		</a>
	`,
	inputs: ['hero']
})
export class HeroDetailComponent implements OnInit {
	hero: Hero;

	constructor(
		private _heroService: HeroService,
		private _routeParams: RouteParams,
		private _router: Router
	) {}

	ngOnInit() {
		let id = +this._routeParams.get('id');
		this._heroService.getHero(id)
			.then(hero => {
				if(!hero) this._router.navigate(['Dashboard']);
				this.hero = hero;
			});
	}

	goBack() {
		window.history.back();
	}
}
