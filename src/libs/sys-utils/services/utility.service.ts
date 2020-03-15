import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  static endStream(subject: Subject<any>) {
    subject.next();
    subject.complete();
  }

  copy(obj: any): any {
    if (!obj) {
      return null;
    }
    const copiedObj = JSON.parse(JSON.stringify(obj));
    return copiedObj;
  }

  generateAlphaNumericId() {
    const length = 8;
    const chars = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let result = '';
    for (let i = length; i > 0; --i) {
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    }
    return result;
  }

  generateAccountId() {
    return Math.floor(Math.random() * 10000) + 50000;
  }
}
