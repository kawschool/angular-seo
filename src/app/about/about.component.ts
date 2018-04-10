import {Component, OnInit} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  template: `<h3>{{ message }}</h3>`
})
export class AboutComponent implements OnInit {
  public message: string;

  constructor(private titleService: Title, private meta: Meta ) {

    this.setTitle('About');

    this.meta.addTag({ name: 'description', content: 'Pagina de About' });
    this.meta.addTag({ name: 'author', content: 'talkingdotnet' });
    this.meta.addTag({ name: 'keywords', content: 'Angular, Meta Service' });
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  ngOnInit() {
    this.message = 'About';
  }
}
