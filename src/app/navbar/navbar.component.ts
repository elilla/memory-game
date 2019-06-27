import {Component, OnInit} from '@angular/core';
import {PlayService} from '../play.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  numbers = [];
  pairNumber: number;
  isPlay: boolean;

  constructor(private playService: PlayService, private router: Router) {
    this.numbers = Array(8).fill(0).map((x, i) => i + 3);
    this.pairNumber = 3;
    this.isPlay = false;
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isPlay = this.router.url.includes('play');
    });
  }

  startNewGame() {
    this.playService.setPairNumber(this.pairNumber);
    this.playService.updateMemoryCards();
  }

}
