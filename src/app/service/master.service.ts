import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
/**
 * uses of service
 * - for some of the basic things
 * - to store data
 * - create api and call functions 70% of the time
 * - create subject and behaviour subject
 * - to create utility function and helper function
 */
export class MasterService {
  constructor() {}

  addTwoNumber(a: number, b: number) {
    return a + b;
  }
}
