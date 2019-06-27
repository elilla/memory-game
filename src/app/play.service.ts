import { Injectable } from '@angular/core';
import {MemoryCard} from '../MemoryCard';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  private cards = [new MemoryCard('angular.png'), new MemoryCard('d3.png'),  new MemoryCard('jenkins.png'),
    new MemoryCard('postcss.png'), new MemoryCard('react.png'), new MemoryCard('redux.png'),
    new MemoryCard('sass.png'), new MemoryCard('ts.png'), new MemoryCard('webpack.png')];
  pairNumber: number;

  constructor() {
    this.setPairNumber(9);
  }

  setPairNumber(pairNumber: number): void {
    this.pairNumber = pairNumber;
  }

  getMemoryCards(): MemoryCard[] {
    let memoryCards: MemoryCard[] = [];
    memoryCards = [..._.cloneDeep(this.cards.slice(0, this.pairNumber)), ..._.cloneDeep(this.cards.slice(0, this.pairNumber))];
    memoryCards.sort(() => Math.random() - 0.5);
    return memoryCards;
  }

}
