import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  getAllQuestionsURL: string = environment.apiUrl + 'questions/getSortedQuestion';
  constructor(private http: HttpClient) { }

  getAllQuestions() {
    return this.http.get(this.getAllQuestionsURL);
  }
}
