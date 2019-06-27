import {Component, OnInit} from '@angular/core';
import {PlayService} from '../play.service';
import {MemoryCard} from '../../MemoryCard';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  cards: MemoryCard[];
  selectedCards: MemoryCard[] = [];
  tryNumber: number;

  constructor(private playService: PlayService) {
    this.tryNumber = 0;
  }

  ngOnInit() {
    this.getMemoryCards();
  }

  getMemoryCards() {
    this.cards = this.playService.getMemoryCards();
  }

  restartGame() {
    this.getMemoryCards();
    this.tryNumber = 0;
  }

  flipCard(cardIndex: number) {
    if (this.selectedCards.length === 2) {
      this.checkIsPair();
    }
    if (!this.cards[cardIndex].isFlipped) {
      this.cards[cardIndex].isFlipped = true;
      this.selectedCards.push(this.cards[cardIndex]);
    }
  }

  checkIsPair() {
    if (this.selectedCards[0].image === this.selectedCards[1].image) {
      this.selectedCards[0].isFinded = true;
      this.selectedCards[1].isFinded = true;
    } else {
      this.tryNumber++;
      this.selectedCards[0].isFlipped = false;
      this.selectedCards[1].isFlipped = false;
    }
    this.selectedCards = [];
  }
}
