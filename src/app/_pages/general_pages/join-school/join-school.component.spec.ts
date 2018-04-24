import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinSchoolComponent } from './join-school.component';

describe('JoinSchoolComponent', () => {
  let component: JoinSchoolComponent;
  let fixture: ComponentFixture<JoinSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
