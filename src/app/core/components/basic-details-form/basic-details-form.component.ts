import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerService } from '../../services/answerServie/answer.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-details-form',
  templateUrl: './basic-details-form.component.html',
  styleUrls: ['./basic-details-form.component.scss']
})
export class BasicDetailsFormComponent implements OnInit {

  student: any;
  isNameValid: boolean = true;
  studentForm = {
    name: new FormControl('', Validators.required),
    cNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern('[6-9]\\d{9}')]),
    standard: new FormControl('', Validators.required),
    school: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z \-\'\.]+')]),
    email: new FormControl('', [Validators.email, Validators.required])
  };

  constructor(private router: Router,
    private answerService: AnswerService) { }

  ngOnInit(): void {

  }


  submitBasicDetails() {
    if (this.validateForm()) {
      const student = {
        name: this.studentForm.name.value,
        cNumber: this.studentForm.cNumber.value,
        standard: this.studentForm.standard.value,
        school: this.studentForm.school.value,
        email: this.studentForm.email.value
      }
      this.answerService.submitBasicDetails(student).subscribe(res => {
        if (!res.error) {
          this.router.navigate(['/questions', res.studentId]);
        } else {
          console.log('error adding student')
        }
      });
    }
  }

  validateForm() {
    return !this.studentForm.name.invalid &&
      !this.studentForm.cNumber.invalid &&
      !this.studentForm.school.invalid &&
      !this.studentForm.standard.invalid &&
      !this.studentForm.email.invalid;
  }

}
