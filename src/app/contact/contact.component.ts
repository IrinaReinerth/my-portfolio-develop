import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name : string;
  email : string;
  message : string;
  contactPhotoUrl = "assets/img/contact.jpg";
  followMe = "FOLLOW ME -";
  myLocation = "Zürich, Switzerland";
  contactMe = "CONTACT ME -";
  buttonNname = "Email me";
  socials = [
    {
      socialIcoLink : "https://www.behance.net/irinaziborova",
      socialIcoUrl : "assets/img/be.png"
    },
    {
      socialIcoLink : "https://www.instagram.com/irinareinerth",
      socialIcoUrl : "assets/img/insta.png"
    },
    {
      socialIcoLink : "https://www.linkedin.com/in/ziborovairina/",
      socialIcoUrl : "assets/img/in.png"
    }
  ];

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo);
  }
}
