import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-step7-list-group-menu',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './step7-list-group-menu.html',
  styleUrl: './step7-list-group-menu.css',
})
export class Step7ListGroupMenu {
  menu = [
    { text: "Step 2 Person-table", appLink: "person-table-example" },
    { text: "Step 3 Component-input", appLink: "component-input-example" },
    { text: "Step 4 @for Directive", appLink: "for-directive-example" },
    { text: "Step 5 Event Bind", appLink: "event-bind-example" },
    { text: "Step 8 Simple Data Table", appLink: "simple-datatable-example" },
    { text: "Step 9 Output Example", appLink: "component-output-example" },
    { text: "Step 10 Template Forms", appLink: "template-driven-form-example" }
  ]
}
