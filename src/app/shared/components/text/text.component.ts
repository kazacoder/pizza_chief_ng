import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'text-component',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input() description: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
