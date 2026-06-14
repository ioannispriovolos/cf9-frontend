import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IPerson } from '../../../shared/interfaces/person';

@Component({
  selector: 'app-person-template-form',
  imports: [
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './person-template-form.html',
  styleUrl: './person-template-form.css',
})
export class PersonTemplateForm {
  @Output() person = new EventEmitter<IPerson>();
  @ViewChild('eForm', {static: false}) form: NgForm | undefined;

  onSubmit(value: any) {
    this.person.emit(value);
  }

  onSetValue() {
    this.form?.setValue({
      firstname: 'Ioannis',
      lastname: 'Priovolos',
      email: 'i.priovolos@aueb.gr'
    });
  }
}
