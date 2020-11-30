import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TestComponent } from '../components/test/test.component';

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
export class HomePage {
  // students: string[] = ["Samuel", "Christine", "Quentin"];
  students: Students[] = [
    { name: "Samuel", grade: 12, comment: "Appliqué", isProjectDone: true },
    { name: "Christine", grade: 13, comment: "Sérieuse", isProjectDone: true },
    { name: "Quentin", grade: 8, comment: "Cancre", isProjectDone: false }
  ];
  message: string = "";

  constructor(public popoverController: PopoverController) {}

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
