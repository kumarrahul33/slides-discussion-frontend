import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-number',
  templateUrl: './slide-number.component.html',
  styleUrls: ['./slide-number.component.css']
})
export class SlideNumberComponent {
  slideNumber: number=0;
  pageNumber: number=0;

  constructor() { }

  onSelectSlide(): void {
    console.log(`Selected slide: ${this.slideNumber}`);
  }

  onSelectPage(): void {
    console.log(`Selected page: ${this.pageNumber}`);
  }
}

