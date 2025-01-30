import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductType;
  // get product(): ProductType {
  //   return this._product;
  // }
  // set product(param: ProductType) {
  //   param.title = param.title.toUpperCase();
  //   this._product = param;
  // }
  // private _product: ProductType;

  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();


  constructor() {
    this.product = {
      image: '',
      title: '',
      description: '',
    }
  }

  ngOnInit(): void {}

  addProductToCart(): void {
    this.addToCartEvent.emit(this.product);
  }

}
