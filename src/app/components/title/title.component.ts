import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'custom-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent  {

  @Input() title: string = '';

  @ContentChild('second')
  private second!: ElementRef;

  constructor() { }

  toUpper(): string {
    return this.title.toUpperCase()
  }

  toLower(): string {
    return this.title.toLowerCase();
  }

  ngAfterViewInit(): void {
    // console.log(this.second);
  }

}
