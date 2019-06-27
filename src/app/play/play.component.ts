import { Component, OnInit } from '@angular/core';
import {PlayService} from '../play.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  cards: string[];

  constructor(private playService: PlayService) { }

  ngOnInit() {
    this.getMemoryCards();
  }

  getMemoryCards(){
    this.cards = this.playService.getMemoryCards();
  }

  restartGame() {
    this.getMemoryCards();
  }

}
