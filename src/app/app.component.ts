import {Component} from '@angular/core';
import { Title, Meta  } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
  <h1>Universal Demo using Angular and Angular CLI</h1>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
  <a routerLink="/lazy">Lazy</a>
  <a routerLink="/lazy/nested">Lazy_Nested</a>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  public constructor(private titleService: Title, private meta: Meta ) {
}

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
