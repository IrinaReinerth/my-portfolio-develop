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
      url : 'https://www.behance.net/irinaziborova',
      title: 'Behance ‣'
    },
    {
      url : 'https://www.instagram.com/irinareinerth/',
      title: 'Instagram ‣'
    },
    {
      url : 'https://www.linkedin.com/in/ziborovairina/',
      title: 'LinkedIn ‣'
    }
  ]
  currentYear = new Date();
}
