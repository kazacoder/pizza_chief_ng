import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: []
})
export class PopupComponent {

  @ViewChild('popup')
  popup!: ElementRef<ElementRef>;

  @Input() data: string = '';

  constructor(private modalService: NgbModal) { }

  open(): void {
    this.modalService.open(this.popup, {})
  }

}


