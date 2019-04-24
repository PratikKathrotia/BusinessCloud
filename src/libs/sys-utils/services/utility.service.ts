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

  generateDatabaseId() {
    const length = 24;
    const chars = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let result = '';
    for (let i = length; i > 0; --i) {
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    }
    return result;
  }
}
