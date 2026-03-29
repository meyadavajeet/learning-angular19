import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCompetationComponent } from './project-competation.component';

describe('ProjectCompetationComponent', () => {
  let component: ProjectCompetationComponent;
  let fixture: ComponentFixture<ProjectCompetationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCompetationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCompetationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
