import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  private cards = ['angular.png', 'd3.png', 'jenkins.png', 'postcss.png', 'react.png',
    'redux.png', 'sass.png', 'ts.png', 'webpack.png'];
  pairNumber: number;

  constructor() {
    this.setPairNumber(9);
  }

  setPairNumber(pairNumber: number): void {
    this.pairNumber = pairNumber;
  }

  getMemoryCards(): string[] {
    let memoryCards: string[] = [];
    memoryCards = [...this.cards.slice(0, this.pairNumber), ...this.cards.slice(0, this.pairNumber)];
    memoryCards.sort(() => Math.random() - 0.5);
    return memoryCards;
  }

}
