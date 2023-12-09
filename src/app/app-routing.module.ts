import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { Demo01Component } from './demo-01/demo-01.component';
import { Demo02Component } from './demo-02/demo-02.component';
import { Demo03Component } from './demo-03/demo-03.component';

const routes: Routes = [
  {path:'',component:MainComponentComponent},
  {path:'demo_01',component:Demo01Component},
  {path:'demo_02',component:Demo02Component},
  {path:'demo_03',component:Demo03Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
