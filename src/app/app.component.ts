import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup<{
    order: FormArray<FormControl<any>[]>,
  }>;
  constructor() {
    this.form = new FormGroup({
      order: new FormArray([
        new FormControl<any>(''), 
        new FormControl<any>(0),
      ]),
    })
  }
}
