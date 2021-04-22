import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib-one',
  template: `
    <p>
      my-lib-one works! 

      {{myVariable}}
    </p>
  `,
  styles: [
  ]
})
export class MyLibOneComponent implements OnInit {

  public myVariable: String = 'Hello this is a library';

  constructor() { }

  ngOnInit(): void {
  }

}
