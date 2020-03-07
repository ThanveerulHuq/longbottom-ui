import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-questions',
  templateUrl: './skill-questions.component.html',
  styleUrls: ['./skill-questions.component.scss']
})
export class SkillQuestionsComponent implements OnInit {

  questions: any = [];


  constructor() { }

  ngOnInit(): void {
    this.questions = [{ question: "Do you like to stay physically active most of the time?", id: 1 },
    { question: "How much Do you like to work with your hands?", id: 2 },
    { question: "How much  Are you an independent type of person?", id: 3 },
    { question: "How much  Do enjoy the outdoors even if the weather isn’t great? ", id: 4 },
    { question: "How much  Do you like to cook?", id: 5 },
    ]
  }

  submitAnswer(id:number,val:number){
    console.log(id,val)
  }

}
