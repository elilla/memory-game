import {Component, OnInit} from '@angular/core';
import {PlayService} from '../play.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  numbers = [];

  constructor(private playService: PlayService) {
    this.numbers = Array(8).fill(0).map((x, i) => i + 3);
  }

  ngOnInit() {
  }

  setPairNumbers(pairNumber: number) {
    this.playService.setPairNumber(pairNumber);
  }

  startNewGame() {
    this.playService.updateMemoryCards();
  }

}
