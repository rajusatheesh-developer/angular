import {Component, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @ContentChild("header")
  header : ElementRef;

  printHeader()
  {
    console.log(this.header);
  }

  protected readonly JSON = JSON;
}
