import { CONSTANTS } from './config.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

const user = CONSTANTS.USER_ADMIN;

@Injectable({
  providedIn: "root",
})

export class AuthService {
    private currentUserSubject: BehaviorSubject<any>;

    selectedUserInLocal$: ReplaySubject<any> = new ReplaySubject();
    selectedUserInLocalStorage = this.selectedUserInLocal$.asObservable();

    constructor() { }

    login(data:any) {
      return new Promise<any>(async (resolve, reject) => {
        this.validate(data.username,data.password)
          .then((result) => {
            //console.log('result',result);
            //this.currentUserSubject.next(result.valid);
            resolve(result);
          })
          .catch((error) => {
            reject(error);
          });
      });
    }

    async validate(username, password) {

      let valid = false;
      let dataUser = [];
      let result = {
        valid : false,
        data : [],
        message :'',
      };

      for (const item of user){
          if ((username == item.username) && (password == item.password)) {
              valid = true;
              dataUser.push(item);
              break;
          }
      }

      if(valid) {
        result.valid = valid;
        result.data = dataUser;
      }else {
        result.message = "invalid credentials";
      }

      return result;
  }

  getSelectedUserFlagStorage() {
    return this.selectedUserInLocalStorage;
  }

  setSelectedUserFlag(data: any): void{
    this.selectedUserInLocal$.next(data);
  }


}
