import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
import { IPerson } from './shared/interfaces/person';
import { Step4ForDirective } from './components/step4-for-directive/step4-for-directive';

@Component({
  selector: 'app-root',
  imports: [Step2PersonTable, Step3PersonTableInput, Step4ForDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cf9-frontend');
  user = {
    firstname: 'Bob',
    lastname: 'Dylan',
    email: 'bob.dylan@aueb.gr'
  }

// Step 3 Pass data to child step3 component
  Person1: IPerson = {
    firstname: 'firstname1',
    lastname: 'lastname1',
    email: 'lastname1@aueb.gr'
  }

  Person2: IPerson = {
    firstname: 'firstname2',
    lastname: 'lastname2',
    email: 'lastname2@aueb.gr'
  }
}