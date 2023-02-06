import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsConceptComponent } from './bindings-concept.component';

describe('BindingsConceptComponent', () => {
  let component: BindingsConceptComponent;
  let fixture: ComponentFixture<BindingsConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingsConceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingsConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
