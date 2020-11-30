import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p>{{ message }}</p>`,
  styles: [`p {text-decoration: underline;}`],
})
export class TestComponent implements OnInit {
  message: string = "Composant chargé par le popover"

  constructor() { }

  ngOnInit() {}

}
