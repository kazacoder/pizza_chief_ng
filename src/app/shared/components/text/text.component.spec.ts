import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextComponent } from './text.component';
import {WordUpperPipe} from "../../pipes/word-upper.pipe";
import {ChickenDescriptionPipe} from "../../pipes/chicken-description.pipe";

describe('TextComponent', () => {
  let component: TextComponent;
  let fixture: ComponentFixture<TextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextComponent, WordUpperPipe, ChickenDescriptionPipe ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
