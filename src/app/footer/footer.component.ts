import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],

})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  contact = 'How to contact';
  links = [
    {
      url : 'https://www.linkedin.com/in/ziborovairina/',
      title: 'LinkedIn ‣'
    }
  ]
  currentYear = new Date();
}
