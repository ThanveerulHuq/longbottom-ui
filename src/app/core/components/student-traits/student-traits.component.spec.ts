import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTraitsComponent } from './student-traits.component';

describe('StudentTraitsComponent', () => {
  let component: StudentTraitsComponent;
  let fixture: ComponentFixture<StudentTraitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTraitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
