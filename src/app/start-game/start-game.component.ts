import {Component, OnInit} from '@angular/core';
import {PlayService} from '../play.service';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {
  numbers: number[];

  constructor(private playService: PlayService) {
    this.numbers = Array(8).fill(0).map((x, i) => i + 3);
  }

  ngOnInit() {
  }

  setPairNumber(pairNumber: number) {
    this.playService.setPairNumber(pairNumber);
  }

}
