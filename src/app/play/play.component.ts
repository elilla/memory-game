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
    this.playService.memoryCardsSubject.subscribe(resp => {
        this.cards = resp;
        this.tryNumber = 0;
      }
    );
    this.playService.updateMemoryCards();
  }

  restartGame() {
    this.playService.updateMemoryCards();
  }

  flipCard(cardIndex: number) {
    if (this.selectedCards.length === 2 && !this.checkIsPair()) {
      this.flipBack();
    }
    if (!this.cards[cardIndex].isFlipped) {
      this.cards[cardIndex].isFlipped = true;
      this.selectedCards.push(this.cards[cardIndex]);
    }
    if (this.selectedCards.length === 2) {
      this.tryNumber++;
      this.checkIsPair();
    }
  }

  checkIsPair(): boolean {
    if (this.selectedCards[0].image === this.selectedCards[1].image) {
      this.selectedCards[0].isFinded = true;
      this.selectedCards[1].isFinded = true;
      this.selectedCards = [];
      return true;
    }
    return false;
  }

  flipBack() {
    this.selectedCards[0].isFlipped = false;
    this.selectedCards[1].isFlipped = false;
    this.selectedCards = [];
  }
}
