"use strict";(self.webpackChunkangular_material_app=self.webpackChunkangular_material_app||[]).push([[763],{65763:function(e,o,t){t.r(o),t.d(o,{SignInModule:function(){return v}});var n=t(38583),r=t(8239),i=t(3679),s=t(72988),a=t(37716),u=t(97595),l=t(54655),g=t(22238),d=t(98295);function m(e,o){1&e&&(a.TgZ(0,"mat-error",16),a._uU(1," Input username is required "),a.qZA())}function c(e,o){if(1&e&&(a.TgZ(0,"div"),a.YNc(1,m,2,0,"mat-error",15),a.qZA()),2&e){const e=a.oxw(2);a.xp6(1),a.Q6J("ngIf",e.signInForm.get("username").hasError("required"))}}function f(e,o){1&e&&(a.TgZ(0,"mat-error",16),a._uU(1," Input password is required "),a.qZA())}function p(e,o){if(1&e&&(a.TgZ(0,"div"),a.YNc(1,f,2,0,"mat-error",15),a.qZA()),2&e){const e=a.oxw(2);a.xp6(1),a.Q6J("ngIf",e.signInForm.get("password").hasError("required"))}}function b(e,o){if(1&e){const e=a.EpF();a.TgZ(0,"form",7,8),a.NdJ("ngSubmit",function(){return a.CHM(e),a.oxw().onSubmitRequest()}),a.TgZ(2,"div",9),a._UZ(3,"input",10),a.YNc(4,c,2,1,"div",11),a.qZA(),a.TgZ(5,"div",9),a._UZ(6,"input",12),a.YNc(7,p,2,1,"div",11),a.qZA(),a.TgZ(8,"div",13),a.TgZ(9,"button",14),a._uU(10," Login "),a.qZA(),a.qZA(),a.qZA()}if(2&e){const e=a.oxw();a.Q6J("formGroup",e.signInForm),a.xp6(3),a.Q6J("formControlName","username"),a.xp6(1),a.Q6J("ngIf",e.submitted),a.xp6(2),a.Q6J("formControlName","password"),a.xp6(1),a.Q6J("ngIf",e.submitted)}}let h=(()=>{class e{constructor(e,o,t,n,r){this._authService=e,this._router=o,this._formBuilder=t,this._activatedRoute=n,this._dialog=r,this.submitted=!1}ngOnInit(){var e=this;return(0,r.Z)(function*(){e.signInForm=e._formBuilder.group({username:["",i.kI.required],password:["",i.kI.required]})})()}onClickLogin(){console.log("onClickLogin"),this._router.navigateByUrl("/dashboard")}onSubmitRequest(){this.submitted=!0,this.signInForm.valid?(this.loginUser(),console.log("form submitted")):this.validateAllFormFields(this.signInForm)}loginUser(){var e=this;return(0,r.Z)(function*(){const o={username:e.signInForm.get("username").value,password:e.signInForm.get("password").value},t=yield e._authService.login(o);t.valid?e._router.navigateByUrl("/dashboard"):e.openConfirmationDialog({singleButton:!0,doubleButton:!1,message:t.message}),console.log("userLogin",t)})()}validateAllFormFields(e){Object.keys(e.controls).forEach(o=>{const t=e.get(o);t instanceof i.NI?t.markAsTouched({onlySelf:!0}):t instanceof i.cw&&this.validateAllFormFields(t)})}openConfirmationDialog(e){this._dialog.open(s.z,{hasBackdrop:!0,closeOnNavigation:!0,disableClose:!1,panelClass:"custom-dialog-pane",data:e})}}return e.\u0275fac=function(o){return new(o||e)(a.Y36(u.e),a.Y36(l.F0),a.Y36(i.qu),a.Y36(l.gz),a.Y36(g.uw))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-sign-in"]],decls:7,vars:1,consts:[[1,"h-screen"],[1,"px-6","h-full","text-gray-800"],[1,"flex","xl:justify-center","lg:justify-between","justify-center","items-center","flex-wrap","h-full","g-6"],[1,"grow-0","shrink-1","md:shrink-0","basis-auto","xl:w-6/12","lg:w-6/12","md:w-9/12","mb-12","md:mb-0"],["src","https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp","alt","Sample image",1,"w-full"],[1,"xl:ml-20","xl:w-5/12","lg:w-5/12","md:w-8/12","mb-12","md:mb-0"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],["signInNgForm","ngForm"],[1,"mb-6"],["type","text","placeholder","Username",1,"form-control","block","w-3/4","px-4","py-2","text-xl","font-normal","text-gray-700","bg-white","bg-clip-padding","border","border-solid","border-gray-300","rounded","transition","ease-in-out","m-0","focus:text-gray-700","focus:bg-white","focus:border-blue-600","focus:outline-none",3,"formControlName"],[4,"ngIf"],["type","password","placeholder","Password",1,"form-control","block","w-3/4","px-4","py-2","text-xl","font-normal","text-gray-700","bg-white","bg-clip-padding","border","border-solid","border-gray-300","rounded","transition","ease-in-out","m-0","focus:text-gray-700","focus:bg-white","focus:border-blue-600","focus:outline-none",3,"formControlName"],[1,"text-center","lg:text-left"],["type","submit",1,"inline-block","px-7","py-3","bg-gray-600","text-white","font-medium","text-sm","leading-snug","uppercase","rounded","shadow-md","hover:bg-blue-700","hover:shadow-lg","focus:bg-blue-700","focus:shadow-lg","focus:outline-none","focus:ring-0","active:bg-blue-800","active:shadow-lg","transition","duration-150","ease-in-out"],["class","mt-2",4,"ngIf"],[1,"mt-2"]],template:function(e,o){1&e&&(a.TgZ(0,"section",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"div",3),a._UZ(4,"img",4),a.qZA(),a.TgZ(5,"div",5),a.YNc(6,b,11,5,"form",6),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(6),a.Q6J("ngIf",o.signInForm))},directives:[n.O5,i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,d.TO],styles:[""]}),e})();var w=t(17463);const x=[{path:"",component:h}];let v=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[n.ez,l.Bz.forChild(x),i.UX,i.u5,w.q]]}),e})()}}]);