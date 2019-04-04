import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  copy(obj: any): any {
    if (!obj) {
      return null;
    }
    const copiedObj = JSON.parse(JSON.stringify(obj));
    return copiedObj;
  }
}
