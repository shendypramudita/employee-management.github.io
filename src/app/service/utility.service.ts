import { trim } from 'lodash';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UtilityService {

  constructor() { }

  onlyNumber(event) {
    let charCode = event.which ? event.which : event.keyCode;
    if (charCode >= 48 && charCode <= 57) {
      // number
      return;
    } else if (charCode >= 37 && charCode <= 40) {
      // arrow
      return;
    } else if (charCode === 8 || charCode == 46) {
      return;
    } else {
      event.preventDefault();
    }
  }

  capitalize(value:string): string {
    let arrWords = value.split(' ');
    let arrCapitalize = [];

    for (let word of arrWords) {
      word = word.toLowerCase();
      let firstChar = word.charAt(0);
      firstChar = firstChar.toUpperCase();
      word = firstChar + word.substr(1);
      arrCapitalize.push(word);
    }

    return arrCapitalize.join(' ');
  }

  removeZeroLeading(event) {
    return new Promise<any>((resolve) => {

      if (event.target.value.length > 0) {
        this.removeSurroundingSpace(event).then((resEvent) => {
          resEvent.target.value = parseInt(resEvent.target.value, 10);
          resolve(resEvent);
        });
      } else {
        resolve(event);
      }

    });
  }
  removeSurroundingSpace(event) {
    return new Promise<any>((resolve) => {
      event.target.value = trim(event.target.value);
      resolve(event);
    });
  }
}
