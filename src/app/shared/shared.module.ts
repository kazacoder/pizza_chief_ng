import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {TitleComponent} from "./components/title/title.component";
import {TextComponent} from "./components/text/text.component";
import {WordUpperPipe} from "./pipes/word-upper.pipe";
import {ChickenDescriptionPipe} from "./pipes/chicken-description.pipe";
import {IsChickenDirective} from "./directives/is-chicken.directive";
import {ChickenProductsPipe} from "./pipes/chicken-products.pipe";
import {RouterModule} from "@angular/router";
import {CoolInputDirective} from "./directives/cool-input.directive";



@NgModule({
  declarations: [
    ProductCardComponent,
    TitleComponent,
    TextComponent,
    IsChickenDirective,
    ChickenProductsPipe,
    WordUpperPipe,
    ChickenDescriptionPipe,
    CoolInputDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ProductCardComponent,
    TitleComponent,
    TextComponent,
    IsChickenDirective,
    ChickenProductsPipe,
    WordUpperPipe,
    ChickenDescriptionPipe,
    CoolInputDirective
  ]
})
export class SharedModule { }
