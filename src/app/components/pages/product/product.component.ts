import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  private subscriptionProducts: Subscription | null = null;

  product: ProductType = {
    id: 0,
    image: '',
    title: '',
    description: '',
    datetime: '',

  }

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.subscriptionProducts = this.productService.getProduct(+params['id'])
          .subscribe({
            next: data => {
              this.product = data;
            },
            error: error => {this.router.navigate(['/']).then();
            }
          });
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptionProducts?.unsubscribe();
  }

}
