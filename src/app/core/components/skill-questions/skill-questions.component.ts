import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/questionService/question.service';
import { AnswerService } from '../../services/answerServie/answer.service';
import { TraitService } from '../../services/traitsService/trait.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skill-questions',
  templateUrl: './skill-questions.component.html',
  styleUrls: ['./skill-questions.component.scss']
})
export class SkillQuestionsComponent implements OnInit {

  questions: any = [];
  student: number;

  constructor(private questionService: QuestionService,
    private answerService: AnswerService,
    private traitService: TraitService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.student = this.route.snapshot.params['id'];
    this.questionService.getAllQuestions().subscribe(questions => {
      this.questions = questions;
    });
  }

  markOption(id: number, val: number) {
    this.questions.forEach(question => {
      if (question.id === id) {
        question['option'] = val;
      }
    });

  }

  submitAnswers() {
    // const answers = this.questions.map(({ id, option }) => ({ id, option }));
    const answers = [{ "id": 1, "option": 75 }, { "id": 2, "option": 50 }, { "id": 3, "option": 25 }, { "id": 4, "option": 0 }, { "id": 5, "option": 75 }, { "id": 6, "option": 75 }, { "id": 7, "option": 75 }, { "id": 8, "option": 75 }, { "id": 9, "option": 75 }, { "id": 10, "option": 25 }, { "id": 11, "option": 75 }, { "id": 12, "option": 25 }, { "id": 13, "option": 100 }, { "id": 14, "option": 100 }, { "id": 15, "option": 100 }, { "id": 16, "option": 100 }, { "id": 17, "option": 100 }, { "id": 18, "option": 75 }, { "id": 19, "option": 0 }, { "id": 20, "option": 100 }, { "id": 21, "option": 100 }, { "id": 22, "option": 0 }, { "id": 23, "option": 100 }, { "id": 24, "option": 0 }, { "id": 25, "option": 100 }, { "id": 26, "option": 50 }, { "id": 27, "option": 25 }, { "id": 28, "option": 75 }, { "id": 29, "option": 75 }, { "id": 30, "option": 25 }, { "id": 31, "option": 75 }, { "id": 32, "option": 25 }, { "id": 33, "option": 75 }, { "id": 34, "option": 25 }, { "id": 35, "option": 75 }, { "id": 36, "option": 25 }, { "id": 37, "option": 50 }, { "id": 38, "option": 100 }, { "id": 39, "option": 0 }, { "id": 40, "option": 75 }, { "id": 41, "option": 25 }, { "id": 42, "option": 75 }, { "id": 43, "option": 75 }, { "id": 44, "option": 75 }, { "id": 45, "option": 75 }, { "id": 46, "option": 50 }, { "id": 47, "option": 75 }, { "id": 48, "option": 100 }];

    this.answerService.submitAnswers({ student: this.student, answers: answers }).subscribe(triats => {
      this.traitService.traits = triats;
      this.router.navigate(['/yourTraits']);
    });
  }

}
