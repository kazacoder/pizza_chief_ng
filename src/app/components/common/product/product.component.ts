import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output, SimpleChanges,
  ViewChild,
} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {TitleComponent} from "../title/title.component";
import {CartProductService} from "../../../services/cart-product.service";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  providers: [CartProductService],
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() product: ProductType;
  // get product(): ProductType {
  //   return this._product;
  // }
  // set product(param: ProductType) {
  //   param.title = param.title.toUpperCase();
  //   this._product = param;
  // }
  // private _product: ProductType;

  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;

  @ViewChild('elem')
  private elem!: ElementRef;

  constructor(public cartProductService: CartProductService) {
    this.product = {
      image: '',
      title: '',
      description: '',
      datetime: '',
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    // console.log('ngOnInit');
  }

  ngDoCheck() {
    // console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    // console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit', this.elem);
    // console.log(this.elem);
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy')
  }

  addProductToCart(): void {
    this.cartProductService.count ++;
    this.addToCartEvent.emit(this.titleComponent.toUpper());
  }

}
