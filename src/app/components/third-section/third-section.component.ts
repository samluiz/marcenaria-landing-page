import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.css'],
})
export class ThirdSectionComponent implements OnInit {
  @Input() target: string = '_self';
  @Input() text: string = 'BAIXE MEU CURRÍCULO';
  @Input() image: string = 'file';
  @Input() href: string = '../../../assets/files/Currículo Gilberto.pdf';

  constructor() {}

  ngOnInit(): void {}
}
