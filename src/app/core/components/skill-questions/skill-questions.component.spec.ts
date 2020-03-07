import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillQuestionsComponent } from './skill-questions.component';

describe('SkillQuestionsComponent', () => {
  let component: SkillQuestionsComponent;
  let fixture: ComponentFixture<SkillQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
