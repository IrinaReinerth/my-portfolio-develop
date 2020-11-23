import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }
  title = 'Irina Reinerth';
  subTitle = 'ux & ui';
  navigations = [
    {
      routerLink : "/portfolio",
      title : "Portfolio"
    },
    {
      routerLink : "/about",
      title : "About"
    },
    {
      routerLink : "/contact",
      title : "Contact"
    }
  ]
}
