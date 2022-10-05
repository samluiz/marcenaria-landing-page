import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(@Inject('Window') private window: Window) {}

  offsetY: number = 0;
  scrolled: boolean = false;

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event']) onScroll($event: any) {
    console.log('scrolling');

    this.offsetY = this.window.scrollY;
    console.log(this.offsetY);

    if (this.offsetY > 325) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }
}
