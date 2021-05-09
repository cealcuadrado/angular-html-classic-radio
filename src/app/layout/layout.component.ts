import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  currentValue: string;

  values = ['male', 'female'];

  constructor() { }

  ngOnInit() {
    this.currentValue = this.values[0];
  }

}
