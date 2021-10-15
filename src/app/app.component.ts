import { Component, OnInit, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public clicked = false;
  public navbarOpen = false;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: any) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const pageName = event.url.replace('/', '');
        if (pageName !== '') {
          const element = this.document.querySelector("#" + pageName);
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'})
            }, 10);
          }
        }
      }
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  onClick(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicked = true;
  }

}
