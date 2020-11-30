import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TestComponent } from '../components/test/test.component';
import { StudentServiceService } from '../student-service.service';

interface Students {
  id?: number;
  name: string;
  grade: number;
  comment: string;
  isProjectDone: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  students: Students[];
  message: string = "";

  constructor(public popoverController: PopoverController, public studentService: StudentServiceService) {}

  ngOnInit(): void {
    this.studentService.findAll().subscribe((students: Students[]) => {this.students = students});
  }

  onClick(index: number) {
    this.message = this.students[index].comment
  }

  async pop(event: any) {
    const popover = await this.popoverController.create({
      component: TestComponent
    })
    return await popover.present();
  }

  onChange(event: any, index: number) {
    let checked = event.target.checked;
    this.students[index].isProjectDone = checked;
    console.log(this.students);
  }
}
