import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-batch-master-crud',
  imports: [FormsModule],
  templateUrl: './batch-master-crud.component.html',
  styleUrl: './batch-master-crud.component.css',
})
export class BatchMasterCrudComponent {
  http = inject(HttpClient);
  newBatchObj: Batch = new Batch();
  batchList: Batch[] = [];

  constructor() {
    this.getAllBatches();
  }

  onSaveBatch() {
    // debugger;
    this.http
      .post(
        'https://api.freeprojectapi.com/api/FeesTracking/batches',
        this.newBatchObj,
      )
      .subscribe({
        next: (result: any) => {
          // debugger;
          alert('Batch Created Successfully.');
        },
        error: (error: any) => {
          // debugger;
          alert(error.error.message);
        },
      });
  }
  getAllBatches() {
    this.http
      .get('https://api.freeprojectapi.com/api/FeesTracking/batches')
      .subscribe({
        next: (result: any) => {
          this.batchList = result;
        },
        error: (error: any) => {
          alert(error.error.message);
        },
      });
  }
}

class Batch {
  batchId: number;
  batchName: string;
  createdDate: Date;

  constructor() {
    this.batchId = 0;
    this.batchName = '';
    this.createdDate = new Date();
  }
}
