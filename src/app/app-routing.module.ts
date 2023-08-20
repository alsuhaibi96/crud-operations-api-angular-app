import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseListComponent } from './course-list/course-list.component';


const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'create-course'
  },
  {
    path:'create-course',component:CourseCreateComponent
  },
  {
    path:'courses-edit/:id',component:CourseEditComponent
  },
  {
    path:'courses-list',component:CourseListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
