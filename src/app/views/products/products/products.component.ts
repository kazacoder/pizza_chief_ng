import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {CartService} from "../../../shared/services/cart.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: ProductType[] = []
  public loading: boolean = false;

  constructor(private productService: ProductService,
              public cartService: CartService,
              private router: Router,
              private http: HttpClient,) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: data => {
            this.products = data
          },
          error: error => {
            console.log(error);
            this.router.navigate(['/']).then();
          }
        })


    // this.products = this.productService.getProducts();
  }

  public addToCart(title: string): void {
    this.cartService.product = title
    this.router.navigate(['/order'], {queryParams: {product: title}})
  }
}
