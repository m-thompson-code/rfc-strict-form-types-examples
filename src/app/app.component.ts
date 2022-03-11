import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup<{
    order: FormArray<[FormControl<string | null>, FormControl<number | null>]>,
  }>;
  constructor() {
    this.form = new FormGroup({
      order: new FormArray([
        new FormControl<string | null>(''), 
        new FormControl<number | null>(0),
      ]),
    })
  }
}
