import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private _getAllCollegesURL = environment.apiUrl + 'courses/getAllColleges/';
  private _queryCourseURL = environment.apiUrl + 'courses/queryCourse/';
  constructor(private http: HttpClient) { }

  getAllColleges(courses: any[]) {
    let courseString = courses.length ? courses.join('|') : 'NA';
    return this.http.get(this._getAllCollegesURL + courses);
  }

  queryCourseURL(q: string) {
    return this.http.get(this._queryCourseURL + q).pipe(map((courses: any) => courses.map(course => course.name)));
  }
}
