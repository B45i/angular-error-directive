import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardInputFormComponent } from './standard-input-form.component';

describe('StandardInputFormComponent', () => {
  let component: StandardInputFormComponent;
  let fixture: ComponentFixture<StandardInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
