import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { merge, of, Subject } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { MatDrawer } from '@angular/material/sidenav';
import { FormControl } from '@angular/forms';
import { SortDirection } from '@angular/material/sort';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
