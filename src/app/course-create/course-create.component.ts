import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';


@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {

  @Input() courseDetails = { name: '', auther: '', cost: 0 };
  constructor(public restApi: RestApiService, public router: Router) {}
  ngOnInit() {}
  addCourse(dataCourse: any) {
    this.restApi.createCourse(this.courseDetails).subscribe((data: {}) => {
      this.router.navigate(['/courses-list']);
    });
  }
}
