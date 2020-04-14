import { Component, OnInit } from '@angular/core';
import { TraitService } from '../../services/traitsService/trait.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-traits',
  templateUrl: './student-traits.component.html',
  styleUrls: ['./student-traits.component.scss']
})
export class StudentTraitsComponent implements OnInit {

  topTraits: any[];
  panelOpenState: boolean;
  careers: any[];

  constructor(private traitService: TraitService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.traitService.traits) {
      console.log(this.traitService.traits)
      this.topTraits = this.traitService.traits.traits;
      this.careers = this.traitService.traits.careers;
    } else {
      this.router.navigate(['']);
    }
  }



}
