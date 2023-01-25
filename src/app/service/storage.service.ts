import { Injectable } from '@angular/core';
import { CONSTANTS } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  saveAuthUser(data:any) {
    return localStorage.setItem('user', data);
  }

  getAuthUser() {
    return localStorage.getItem('user');
  }

  saveEmployee(data:any) {
    return localStorage.setItem('employee',  JSON.stringify(data));
  }

  getEmployee() {
    return JSON.parse(localStorage.getItem('employee'));
  }

}
