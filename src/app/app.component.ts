import { Component } from '@angular/core';

// 添加英雄对象
export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  // hero = 'Windstorm';
  hero: Hero = {
    id: 1,
    name: 'Windstorms'
  };
}

