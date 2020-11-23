import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myPhotoUrl = "assets/img/me2.jpg";
  myStory = "My Story -";
  paragrafs = [
     'I am an Interaction Engineer and Usability specialist with a passion to bring clear logic, good user experience, and a pleasant UI to web-based platforms.',
     'I started in 2014 to learn about web technologies namely HTML, CSS, and Javascript. Followed by a Master program in Computer Graphics and Web Design, I deepened my knowledge in Helsinki’s Aalto University with the following courses: human-computer interaction, user-oriented design and usability product design.",     ',
     'I am hands on with most popular prototyping and design tools like Adobe CC, Sketch, Figma, Invision, Anima, Craft and I am an active user of design thinking methods and I am used to work in an agile environment.'
  ];
  educations = [
    {
      year : '2016',
      name : 'Aalto University, semester abroad'
    },
    {
      year : '2015-2017',
      name : 'ITMO University, M.Sc Computer Grafics & Web-Design'
    },
    {
      year : '2009-2015',
      name : 'Peter the Great St.Petersburg Polytechnic University, B. Managment'
    },
    {
      year : '2014',
      name : 'Learning center Status, Creation and Promotion of Web Sites'
    }
  ];
  experiences = [
    {
      year : '2018 - 2020',
      name : 'Visual Meta GmBH, Interaction Engineer'
    },
    {
      year : '2017',
      name : 'Avanta Digital, Web-designer'
    },
    {
      year : '2012-2017',
      name : 'Reksoft, project assistant'
    }
  ];
  skills = "#HTML #CSS #JavaScript #bootstrap #Angular #Java #AdobeCC #AdobePhotoshop #AdobeIllustrator #Sketch #Figma #InVision #UI #UX #GraphicDesign #GifAnimation #WebDesign #ResponsiveDesign #CrosBrowserDesign #GitHub #Bitbucket #InteliJ";

}
