import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private _router:Router,
  ) { }

  ngOnInit(): void {
  }

  onClickEMployee(){
    this._router.navigateByUrl('/employee');
  }

  onClickLogout(){
    this._router.navigateByUrl('/sign-in');
  }

  onClickHome(){
    this._router.navigateByUrl('/dashboard');
  }

}
