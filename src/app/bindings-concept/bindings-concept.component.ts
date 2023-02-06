import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings-concept',
  templateUrl: './bindings-concept.component.html',
  styleUrls: ['./bindings-concept.component.css'],
})
export class BindingsConceptComponent {
  title = 'practise';

  list = ['apple', 'mango', 'kiwi', 'pineapple'];

  count = 0;
  name: string = 'This is my name';

  constructor() {}

  onclickIncreaseCount() {
    this.count++;
  }

  onclickDecreaseCount() {
    this.count--;
  }

  oninputSetName(event: any) {
    this.name = event.target.value;
  }
}
