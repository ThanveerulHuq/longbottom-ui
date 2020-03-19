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

  constructor(private traitService: TraitService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.traitService.traits) {
      this.topTraits = this.calculateTopTraits(this.traitService.traits);
    } else {
      this.router.navigate(['']);
    }
  }

  calculateTopTraits(traitsPercentage: any) {
    let traitsArray = []
    for (let trait in traitsPercentage) {
      traitsArray.push({ trait: trait, value: traitsPercentage[trait] });
    }
    return traitsArray.sort((traitA, traitB) => {
      return traitB.value - traitA.value;
    })

  }


}
