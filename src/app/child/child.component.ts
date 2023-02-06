import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() id = 0;
  @Output() idChange = new EventEmitter<number>();

  onclickSelectThisChild() {
    console.log(
      'step 1:  user clicked on child btn and triggered onclickSelectThisChild'
    );

    // inside $event = this.id
    console.log('step 2:   this.idChange emitted child id');
    this.idChange.emit(this.id);
  }
}
