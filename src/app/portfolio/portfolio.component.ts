import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Observable, of } from 'rxjs';
import { Project } from '../model/project.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  

  constructor(public projectsService: ProjectsService) { }

  ngOnInit() {
  }

}
