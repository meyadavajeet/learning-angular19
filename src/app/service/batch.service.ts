import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BatchService {
  http = inject(HttpClient);

  constructor() {}

  getAllBatches() {
    return this.http.get(
      'https://api.freeprojectapi.com/api/FeesTracking/batches',
    );
  }

  saveBatch(newBatchObj: any) {
    return this.http.post(
      'https://api.freeprojectapi.com/api/FeesTracking/batches',
      newBatchObj,
    );
  }

  updateBatch(batchId: number, newBatchObj: any) {
    return this.http.put(
      'https://api.freeprojectapi.com/api/FeesTracking/batches/' + batchId,
      newBatchObj,
    );
  }

  deleteBatch(id: number) {
    return this.http.delete(
      'https://api.freeprojectapi.com/api/FeesTracking/batches/' + id,
    );
  }
}
