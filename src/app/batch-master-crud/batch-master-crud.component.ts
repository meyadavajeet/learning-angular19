import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BatchService } from '../service/batch.service';

@Component({
  selector: 'app-batch-master-crud',
  imports: [FormsModule],
  templateUrl: './batch-master-crud.component.html',
  styleUrl: './batch-master-crud.component.css',
})
export class BatchMasterCrudComponent {
  http = inject(HttpClient);
  newBatchObj: Batch = new Batch();
  // batchList: Batch[] = [];
  batchList = signal<Batch[]>([]);

  // inject batch service // after v16 work like this
  batchService = inject(BatchService);

  constructor() {
    this.getAllBatches();
  }

  onSaveBatch() {
    // debugger;
    // this.http
    //   .post(
    //     'https://api.freeprojectapi.com/api/FeesTracking/batches',
    //     this.newBatchObj,
    //   )
    //   .subscribe({
    //     next: (result: any) => {
    //       // debugger;
    //       alert('Batch Created Successfully.');
    //       this.getAllBatches();
    //     },
    //     error: (error: any) => {
    //       // debugger;
    //       alert(error.error.message);
    //     },
    //   });
    this.batchService.saveBatch(this.newBatchObj).subscribe({
      next:(result:any)=>{
        alert("Batch created successfully");
        this.getAllBatches();
      },
      error:(error:any)=>{
        alert(error.error.message)
      }
    })
  }
  getAllBatches() {
    // this.http
    //   .get('https://api.freeprojectapi.com/api/FeesTracking/batches')
    //   .subscribe({
    //     next: (result: any) => {
    //       this.batchList.set(result);
    //     },
    //     error: (error: any) => {
    //       alert(error.error.message);
    //     },
    //   });

    // using the services
    this.batchService.getAllBatches().subscribe({
      next: (result: any) => {
        this.batchList.set(result);
      },
      error: (error: any) => {
        alert(error.error.message);
      },
    });
  }
  onEditBatch(data: Batch) {
    // this two line for detaching the reference
    let stringData = JSON.stringify(data);
    let parsedData = JSON.parse(stringData);
    this.newBatchObj = parsedData;
  }

  onUpdateBatch() {
    // this.http
    //   .put(
    //     'https://api.freeprojectapi.com/api/FeesTracking/batches/' +
    //       this.newBatchObj.batchId,
    //     this.newBatchObj,
    //   )
    this.batchService.updateBatch(this.newBatchObj.batchId, this.newBatchObj)
      .subscribe({
        next: (result: any) => {
          // debugger;
          alert('Batch Updated Successfully.');
          this.getAllBatches();
          this.onClearBatch();
        },
        error: (error: any) => {
          // debugger;
          alert(error.error.message);
        },
      });
  }

  onDeleteBatch(id: number) {
    let isDeleteable = confirm('Are you sure want to delete');
    if (isDeleteable) {
      // this.http
      //   .delete('https://api.freeprojectapi.com/api/FeesTracking/batches/' + id)
      this.batchService.deleteBatch(id)
        .subscribe({
          next: (result: any) => {
            // debugger;
            alert('Batch Deleted Successfully.');
            this.getAllBatches();
          },
          error: (error: any) => {
            // debugger;
            alert(error.error.message);
          },
        });
    }
  }

  onClearBatch() {
    // clear the form
    this.newBatchObj = new Batch();
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
