import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

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
        const product = this.productService.getProduct(+params['id'])
        if (product) {
          this.product = product
        } else {
          this.router.navigate(['/']).then()
        }
      }
    });
  }

}
