import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicDetailsFormComponent } from './core/components/basic-details-form/basic-details-form.component';
import { SkillQuestionsComponent } from './core/components/skill-questions/skill-questions.component';


const routes: Routes = [{ path: '', component: BasicDetailsFormComponent },
{ path: 'questions', component: SkillQuestionsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
