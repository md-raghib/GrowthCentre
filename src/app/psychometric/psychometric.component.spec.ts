import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychometricComponent } from './psychometric.component';

describe('PsychometricComponent', () => {
  let component: PsychometricComponent;
  let fixture: ComponentFixture<PsychometricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychometricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychometricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
