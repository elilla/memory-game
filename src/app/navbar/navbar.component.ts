import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  numbers = [];

  constructor() {
    this.numbers = Array(8).fill(0).map((x, i) => i + 3); // [0,1,2,3,4]
    console.log(this.numbers);
  }

  ngOnInit() {
  }

}
