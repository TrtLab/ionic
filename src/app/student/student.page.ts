import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  student: Student;
  studentId: number;


  constructor(public studentService: StudentServiceService, public route: ActivatedRoute) { }

  // ngOnInit() {
  //   this.routeSub = this.route.params.subscribe(params => { this.studentId = params['id'] });
  //   this.studentService.findById(2).subscribe((student) => this.student = student );
  //   console.log("1: " + this.student);
  // }

  ngOnInit(): void {
    this.studentId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.studentService.findById(this.studentId).subscribe((student: Student) => {this.student = student});
  }

}
