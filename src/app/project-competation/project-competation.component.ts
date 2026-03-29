import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-project-competation',
  imports: [ReactiveFormsModule],
  templateUrl: './project-competation.component.html',
  styleUrl: './project-competation.component.css',
})
export class ProjectCompetationComponent {
  projectForm = new FormGroup({
    competitionId: new FormControl(0),
    title: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    status: new FormControl(''),
  });

  http = inject(HttpClient);
  competationList = signal<projectList[]>([]);

  constructor(private masterService: MasterService) {
    //using contructor dependency injection calling MasterService
    masterService.addTwoNumber(20, 30);
    this.getAllCopetation();
  }

  getAllCopetation() {
    this.http
      .get(
        'https://api.freeprojectapi.com/api/ProjectCompetition/GetAllCompetition',
      )
      .subscribe({
        next: (res: any) => {
          this.competationList.set(res);
        },
        error: (err: any) => {
          console.log(err.error.message);
        },
      });
  }

  saveProjectCompetation() {
    const formValue = this.projectForm.value;
    this.http
      .post(
        'https://api.freeprojectapi.com/api/ProjectCompetition/competition',
        formValue,
      )
      .subscribe({
        next: (res: any) => {
          alert('Project Added Successfully');
          this.getAllCopetation();
        },
        error: (err: any) => {
          console.log(err.error);
        },
      });
  }

  updateProjectCompetation() {
    const formValue = this.projectForm.value;
    this.http
      .put(
        'https://api.freeprojectapi.com/api/ProjectCompetition/update/' +
          formValue.competitionId,
        formValue,
      )
      .subscribe({
        next: (res: any) => {
          alert('Project updated Successfully');
          this.getAllCopetation();
        },
        error: (err: any) => {
          console.log(err.error.message);
        },
      });
  }

  onEdit(item: projectList) {
    this.projectForm = new FormGroup({
      competitionId: new FormControl(item.competitionId),
      title: new FormControl(item.title),
      description: new FormControl(item.description),
      startDate: new FormControl(item.startDate),
      endDate: new FormControl(item.endDate),
      status: new FormControl(item.status),
    });
  }

  onDelete(id: number) {
    let isDeleteable = confirm('Are you sure want to delete');
    if (isDeleteable) {
      this.http
        .delete(
          'https://api.freeprojectapi.com/api/ProjectCompetition/delete/' + id,
        )
        .subscribe({
          next: (result: any) => {
            // debugger;
            alert('Project Competition Deleted Successfully.');
            this.getAllCopetation();
          },
          error: (error: any) => {
            // debugger;
            alert(error.error.message);
          },
        });
    }
  }
  onClear() {
    // clear the form
    this.projectForm = new FormGroup({
      competitionId: new FormControl(0),
      title: new FormControl(''),
      description: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      status: new FormControl(''),
    });
  }
}

export interface projectList {
  competitionId: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
}
