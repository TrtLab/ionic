import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentServiceService } from '../student-service.service';

interface Students {
  id?: number;
  name: string;
  grade: number;
  comment: string;
  isProjectDone: boolean;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {
  private routeSub: Subscription;
  student: Students;
  studentId: number;


  constructor(public studentService: StudentServiceService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => { this.studentId = params['id'] })
    this.studentService.findById(this.studentId).subscribe((student) => this.student = student );
    console.log(this.student);
  }

}
