import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoQuizComponent } from './demo-quiz.component';

describe('DemoQuizComponent', () => {
  let component: DemoQuizComponent;
  let fixture: ComponentFixture<DemoQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
