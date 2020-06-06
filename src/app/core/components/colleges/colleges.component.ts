import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith, flatMap, mergeMap, filter, tap, switchMap, debounce, debounceTime } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { TraitService } from '../../services/traitsService/trait.service';
import { CourseService } from '../../services/courseService/course.service';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.scss']
})
export class CollegesComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  courseCtrl = new FormControl();
  filteredCourses: Observable<string[]>;
  selectedCourses: string[] = [];
  allCourses: string[] = ['B.com in LLB', 'BA in LLB', 'Bachelor of Law (PG)', 'BBA in LLB', 'LLB (Bachelor of Law)- Integrated'];
  $colleges: Observable<any>;


  @ViewChild('courseInput') courseInput: ElementRef;

  constructor(private traitService: TraitService, private courseService: CourseService) {

  }

  ngOnInit() {
    this.filteredCourses = this.courseCtrl.valueChanges.pipe(
      debounceTime(500),
      switchMap((filterValue: string) => {
        if (filterValue) {
          return this.courseService.queryCourseURL(filterValue.toLocaleLowerCase());
        } else {
          return of([]);
        }
      }),
      tap(console.log),
    );
    this.selectedCourses = this.traitService.courseName ? [this.traitService.courseName] : [];
    this.subscribeColleges();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.selectedCourses.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.courseCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.selectedCourses.indexOf(fruit);

    if (index >= 0) {
      this.selectedCourses.splice(index, 1);
    }
    this.subscribeColleges();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedCourses.push(event.option.viewValue);
    this.courseInput.nativeElement.value = '';
    this.courseCtrl.setValue(null);
    this.subscribeColleges();
  }


  subscribeColleges() {
    if (this.selectedCourses.length) {
      this.$colleges = this.courseService.getAllColleges(this.selectedCourses);
    }
  }

}
