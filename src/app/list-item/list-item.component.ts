import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
  @Input() name = '';
  @Input() index = 0;

  @Output() deleteNameByIndex = new EventEmitter<number>();
  @Output() editNameById = new EventEmitter<any>();
  onclickDeleteName() {
    this.deleteNameByIndex.emit(this.index);
  }
  onclickEditName() {
    let obj = {
      index: this.index,
      name: this.name,
    };
    this.editNameById.emit(obj);
  }
}
