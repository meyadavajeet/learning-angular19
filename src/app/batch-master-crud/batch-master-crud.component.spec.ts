import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchMasterCrudComponent } from './batch-master-crud.component';

describe('BatchMasterCrudComponent', () => {
  let component: BatchMasterCrudComponent;
  let fixture: ComponentFixture<BatchMasterCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatchMasterCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchMasterCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
