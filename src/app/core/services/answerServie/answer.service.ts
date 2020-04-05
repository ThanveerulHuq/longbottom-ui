import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private submitAnswersURL: string = environment.apiUrl + 'answers/submitAnswers';
  private submitDetailsURL: string = environment.apiUrl + 'student/addStudent';

  constructor(private http: HttpClient) { }

  submitAnswers(answers: any): Observable<any> {
    return this.http.post(this.submitAnswersURL, answers);
  }

  submitBasicDetails(student: any): Observable<any> {
    return this.http.post(this.submitDetailsURL, student);
  }
}
