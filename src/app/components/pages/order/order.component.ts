import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  public formValues = {
    productTitle: '',
    address: '',
    name: '',
    phone: '',
  }

  private subscription: Subscription | null = null;

  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // if (this.cartService.product) {
    //   this.formValues.productTitle = this.cartService.product
    // }
    //
    // const productParam = this.activatedRoute.snapshot.queryParamMap.get('product')
    // if (productParam) {
    //   this.formValues.productTitle = productParam
    // }



    this.subscription = this.activatedRoute.queryParams.subscribe(params => {
      if (params['product']) {
        this.formValues.productTitle = params['product']
      }
    });


  }

  public createOrder() {
    let inputs = Array.from(document.querySelectorAll('input'));
    for (const input of inputs) {
      if ((input as HTMLInputElement).value === '') {
        alert(`Заполните поле ${(input as HTMLInputElement).placeholder}`);
        return;
      }
    }

    this.formValues = {
      productTitle: '',
      address: '',
      name: '',
      phone: '',
    }
  }

  test() {
      this.subscription?.unsubscribe();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
