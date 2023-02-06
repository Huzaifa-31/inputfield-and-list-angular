import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css'],
})
export class ListFormComponent implements OnChanges {
  name = '';
  @Output() newName = new EventEmitter<string>();
  @Input() student: any = null;
  @Output() updatedName = new EventEmitter<any>();
  oninputSetName(event: any) {
    this.name = event.target.value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('list-form: changes happen ', changes);
    this.name = changes['student']?.currentValue?.name ?? '';
  }

  change(event: any) {
    this.name = event.target.value;
  }

  onclickEmitNewName() {
    this.newName.emit(this.name);
    this.name = '';
  }
  onclickEmitUpdateName() {
    // if (this.name == '') return;
    if (!this.name) return;
    this.updatedName.emit({
      name: this.name,
      index: this.student.index,
    });
  }
}
