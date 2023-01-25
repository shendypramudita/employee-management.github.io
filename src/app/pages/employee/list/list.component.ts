import { DetailEmployeeDialogComponent } from './../../../shared/dialogs/detail-employee-dialog/detail-employee-dialog.component';
import { trim } from 'lodash';
import { Subscription, timer, Subject } from 'rxjs';
import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { SortDirection } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'app/shared/dialogs/confirmation-dialog/confirmation-dialog.component';
import { FormEmployeeDialogComponent } from 'app/shared/dialogs/form-employee-dialog/form-employee-dialog.component';
import { DataService } from 'app/service/data.service';
import { StorageService } from 'app/service/storage.service';

@Component({
    selector: 'dashboard-list',
    templateUrl: './list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DataService]
})
export class EmployeeListComponent implements OnInit, OnDestroy {

  isLoading = false;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  employeedata:any;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  paginationEmployee: any;
  subPaginationEmployee: Subscription;

  searchInputControl: FormControl = new FormControl();
  offset = 0;
  limit = 10;
  sort: SortDirection = 'desc';
  orderBy = 'description';

  total = 0;
  pageIndex = 0;
  searchTimeout: any;
  dataSearch:any;

    constructor(
        private _dialog: MatDialog,
        private _dataService: DataService,
        private _storageService:StorageService
    ) {

      this.subPaginationEmployee = this._dataService.paginationEmployee.subscribe(async (pagination) => {

        if (pagination) {
          this.paginationEmployee= pagination;
        } else {
          this.paginationEmployee = {
            orderBy: 'description',
            sort: 'asc',
            limit: 10,
            offset: 0,
            pageIndex: 0
          };
        }

        this.sort = this.paginationEmployee.sort;
        this.orderBy = this.paginationEmployee.orderBy;
        this.offset = this.paginationEmployee.offset;
        this.limit = this.paginationEmployee.limit;
        this.pageIndex = this.paginationEmployee.pageIndex;
        this.getListEmployee();


    });

    }

    async ngOnInit() {
      await this.getListEmployee();
    }

    async getListEmployee(){

      let employee = this._dataService.employeeData();
      let employeeStorageData = this._storageService.getEmployee();

      if(employeeStorageData === null){
        this._storageService.saveEmployee(employee);
      }

      let employeeData:any = [];
      employeeData = this._storageService.getEmployee();

      this.employeedata = this.limitOffset(employeeData, this.limit,this.offset);
      this.sortData(this.employeedata,this.orderBy,this.sort);
      this.total = employeeData.length;

      if(this.dataSearch !== undefined && this.dataSearch !== ''){
        this.employeedata = this.filter(this.dataSearch);
        this.total = this.employeedata.length;
     }
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    async searchChanged() {
      let searchValue = trim(this.searchInputControl.value);
      this.dataSearch = searchValue.toLowerCase();

      let pagination = {
        orderBy: 'description',
        sort: 'asc',
        limit: 10,
        offset: 0,
        pageIndex: 0
      };

      if (this.paginationEmployee) {
        pagination.offset = trim(this.searchInputControl.value).length > 0 ? 0 : this.paginationEmployee.offset;
        pagination.pageIndex = trim(this.searchInputControl.value).length > 0 ? 0 : this.paginationEmployee.pageIndex;
        pagination.orderBy = this.paginationEmployee.orderBy;
        pagination.sort = this.paginationEmployee.sort;
      }

      this._dataService.paginationEmployee.next(pagination);

    }

    onClickEdit(){

      const data = {
        singleButton : true,
        doubleButton : false,
        message : 'Masih ada data',
      };

      this.openConfirmationDialog(data);
    }

    onClickAddEmployee(){

      const data = {
        singleButton : true,
        doubleButton : false,
        message : 'Add Employee',
      };

      this.openFormEmployeeDialog(data);
    }

    openConfirmationDialog(param){

      const dialogRef = this._dialog.open(ConfirmationDialogComponent, {
        hasBackdrop: true,
        closeOnNavigation: true,
        disableClose: false,
        panelClass: 'custom-dialog-pane',
        data:param,
      });

    }

    openFormEmployeeDialog(param){

      const dialogRef = this._dialog.open(FormEmployeeDialogComponent, {
        hasBackdrop: true,
        closeOnNavigation: true,
        disableClose: false,
        maxWidth: '100vw',
        maxHeight: '100vh',
        width: '750px',
        height: '100%',
        panelClass: 'full-screen-modal',
        data:param,
      });

      dialogRef.afterClosed().subscribe(async (res) => {
        if (res) {
          await this.getListEmployee();
        }
      });

    }

    openDetailEmployeeDialog(param){

      const dialogRef = this._dialog.open(DetailEmployeeDialogComponent, {
        hasBackdrop: true,
        closeOnNavigation: true,
        disableClose: false,
        maxWidth: '100vw',
        maxHeight: '100vh',
        width: '750px',
        height: '100%',
        panelClass: 'full-screen-modal',
        data:param,
      });

      dialogRef.afterClosed().subscribe(async (res) => {
        if (res) {
          await this.getListEmployee();
        }
      });

    }

  async detectSearch() {
    if (this.searchTimeout) {
      await clearTimeout(this.searchTimeout);
    }

    this.searchTimeout = await setTimeout(async () => {
      await clearTimeout(this.searchTimeout);
      await this.searchChanged();
      this.employeedata = [];
    }, 800);
  }

  sortChanged(event) {
    this.paginationEmployee.orderBy = event.active;
    this.paginationEmployee.sort = event.direction;

    this.searchChanged();
  }

  pageChanged(event) {
    this.paginationEmployee.limit = event.pageSize;
    this.paginationEmployee.offset = event.pageIndex * event.pageSize;
    this.paginationEmployee.pageIndex = event.pageIndex;

    this.searchChanged();
  }

  limitOffset(array:[], limit: number, offset: number){
    if (!array) return [];

    const length = array.length;

    if (!length) {
      return [];
    }
    if (offset > length - 1) {
      return [];
    }

    const start = Math.min(length - 1, offset);
    const end = Math.min(length, offset + limit);

    return array.slice(start, end);
  }

  sortData(employeeData,orderBy,sort) {
    if (!orderBy || sort === '') {
      this.employeedata = employeeData;
      return;
    }

    this.employeedata = employeeData.sort((a, b) => {
      const isAsc = sort === 'asc';
      switch (orderBy) {
        case 'username':
          return this.compare(a.username, b.username, isAsc);
        case 'firstName':
          return this.compare(a.firstName, b.firstName, isAsc);
        case 'lastName':
          return this.compare(a.lastName, b.lastName, isAsc);
        case 'email':
          return this.compare(a.email, b.email, isAsc);
        case 'basicSalary':
          return this.compare(a.basicSalary, b.basicSalary, isAsc);
        case 'status':
          return this.compare(a.status, b.status, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  filter(dataSearch:String){

    const filtered = this.employeedata.filter((obj) => {
      return obj.firstName.toLowerCase() === dataSearch;
    });

    return filtered;
  }

}
