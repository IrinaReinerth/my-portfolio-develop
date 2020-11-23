import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../model/project.model';
// import { projection } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project: Project;
  id : number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectsService: ProjectsService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getProject();
  }

  getProject(): void {
    this.project = this.projectsService.getProject().filter(proj => proj.id === this.id)[0];

  }

  goBack(): void {
    this.location.back();
  }

  goNext(): void {
    var next = this.id + 1 ;

  }
}
