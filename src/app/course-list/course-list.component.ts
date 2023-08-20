import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  Course: any = [];
  constructor(public restApi: RestApiService) {}
  ngOnInit() {
    this.loadCourses();
  }
  // Get employees list
  loadCourses() {
    return this.restApi.getCourses().subscribe((data: {}) => {
      this.Course = data;
    });
  }
  // Delete course
  deleteCourse(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteCourse(id).subscribe((data) => {
        this.loadCourses();
      });
    }
  }

}
