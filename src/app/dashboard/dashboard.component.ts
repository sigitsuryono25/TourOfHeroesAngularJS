import { Component, OnInit } from '@angular/core';
import { Hero } from '../service/hero';
import { HeroService } from '../service/hero.service';
import { KoreancornersService } from '../service/koreancorners.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  populers: any = [];
  latesposts: any = [];

  constructor(private heroService: HeroService, private koreanService: KoreancornersService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.getLatestPosts();
    this.getPopulerPosts();
  }


  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(h=> this.heroes = h);
  }

  getLatestPosts(): void{
    const url = "https://koreancorners.com/mobileservice/getLatestPosts";
    this.koreanService.getData(url)
    .subscribe(
      data=> {
        this.latesposts = data.data;
        
      },
      err=> {
        console.log(err);
      }
    );
  }

  getPopulerPosts(): void{
    const url = "https://koreancorners.com/mobileservice/getPopulerPosts";
    this.koreanService.getData(url)
    .subscribe(
      data=>{
        this.populers = data.data
      }, 
      err=>{
        console.error(err);
      }
    )
  }
}
