import {Component} from 'angular2/core';
import {
	RouteConfig,
	ROUTER_DIRECTIVES,
	ROUTER_PROVIDERS
} from 'angular2/router';

import {HeroService} from './hero.service';
import {HeroComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';

@Component({
	selector: 'my-app',
	directives: [ROUTER_DIRECTIVES],
	providers: [HeroService, ROUTER_PROVIDERS],
	template: `
		<nav>
			<div class="nav-wrapper teal">
				<a href [routerLink]="['Dashboard']" class="brand-logo left">{{ title }}</a>
				<ul id="nav-mobile" class="right">
					<li><a href [routerLink]="['Heroes']">Heroes</a></li>
				</ul>
			</div>
		</nav>
		<router-outlet></router-outlet>
	`
})
@RouteConfig([
	{
		path: '/',
		name: 'Dashboard',
		component: DashboardComponent
	},
	{
		path: '/heroes',
		name: 'Heroes',
		component: HeroComponent
	},
	{
		path: '/detail/:id',
		name: 'HeroDetail',
		component: HeroDetailComponent
	}
])
export class AppComponent {
	public title = 'Tour of heroes';
}
