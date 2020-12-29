import { Component, OnInit } from '@angular/core';
import { Hero } from '../service/hero';
import { HeroService } from '../service/hero.service';
import { HEROES } from '../service/mock-heroes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }


  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(h=> this.heroes = h);
  }
}
