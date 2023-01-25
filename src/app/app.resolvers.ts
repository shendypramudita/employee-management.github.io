import { AuthService } from './service/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable, ReplaySubject, Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InitialDataResolver implements Resolve<any>
{

    bolValidData:boolean = false;
    _validData = new ReplaySubject<boolean>(1);


    /**
     * Constructor
     */
    constructor(
        private _authService:AuthService,
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Use this resolver to resolve initial mock-api for the application
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
        //console.log('Masuk resolver');
        //this._authValidateService.getEmployeeAuth()
        let sb:Subscription;
        let sb2Folder:Subscription;
        let validDt = this._validData.asObservable();

        /* check first data is load */

        sb = this._authService.getSelectedUserFlagStorage().subscribe((data)=>{

            console.log('Valid resolved', data);

                this.bolValidData = true;
                this._validData.next(true);
                this._validData.complete();
        });

        validDt.subscribe((data)=>{
            sb.unsubscribe();
        })

        // Fork join multiple API endpoint calls to wait all of them to finish
        return forkJoin([
            validDt,
        ]);
    }
}
