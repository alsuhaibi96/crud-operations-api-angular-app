import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  courseData: any = {};
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }
  ngOnInit() { 
    this.restApi.getCourse(this.id).subscribe((data: {}) => {
      this.courseData = data;
    })
  }
  // Update course data
  updateCourse() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateCourse(this.id, this.courseData).subscribe(data => {
        this.router.navigate(['/courses-list'])
      })
    }
  }

}
