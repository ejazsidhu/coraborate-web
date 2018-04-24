import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDahboardComponent } from './general-dahboard.component';

describe('GeneralDahboardComponent', () => {
  let component: GeneralDahboardComponent;
  let fixture: ComponentFixture<GeneralDahboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralDahboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralDahboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
