import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicDetailsFormComponent } from './core/components/basic-details-form/basic-details-form.component';
import { SkillQuestionsComponent } from './core/components/skill-questions/skill-questions.component';
import { StudentTraitsComponent } from './core/components/student-traits/student-traits.component';
import { CollegesComponent } from './core/components/colleges/colleges.component';


const routes: Routes = [{ path: '', component: BasicDetailsFormComponent },
{ path: 'questions/:id', component: SkillQuestionsComponent },
{ path: 'yourTraits', component: StudentTraitsComponent },
{ path: 'searchCollege', component: CollegesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
