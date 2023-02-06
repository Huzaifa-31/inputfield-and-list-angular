import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  students = ['huzaifa', 'hunzila', 'waqar', 'sibte', 'shahzeen'];
  student = null;

  onemitAddNewName(newName: string) {
    this.students.push(newName);
  }

  onemitDeleteNameByIndex(index: number) {
    this.students.splice(index, 1);
  }
  onemitEditNameById(student: any) {
    this.student = student;
  }

  updateThisNameInList(student: any) {
    let newName = student.name;
    let index = student.index;

    this.students.splice(index, 1, newName);
  }
}
