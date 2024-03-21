import { ChildComponent } from './child/child.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleComponentComponent } from './lifecycle-component/lifecycle-component.component';
import { NgcontentComponentComponent } from './ngcontent-component/ngcontent-component.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    component: LifecycleComponentComponent,
    path: ''
  },
  {
    component: NgcontentComponentComponent,
    path: 'ngcontent'
  },
  {
    component: ParentComponent,
    path: 'parent'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
