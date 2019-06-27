export class MemoryCard {
  image: string;
  isFlipped: boolean;
  isFinded: boolean;

  constructor(image: string) {
    this.image = image;
    this.isFinded = false;
    this.isFlipped = false;
  }
}
