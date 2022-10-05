import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() target: string = '';
  @Input() text: string = '';
  @Input() image: string = '';
  @Input() href: string = '';

  constructor() {}

  ngOnInit(): void {}
}
