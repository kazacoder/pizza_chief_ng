import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./css/animate.min.css', './css/hover-min.css', './css/magnific-popup.css', './app.component.scss', ],
  providers: []
})
export class AppComponent implements OnInit {

  public products: ProductType[] = []

  public formValues = {
    productTitle: '',
    address: '',
    name: '',
    phone: '',
  }

  lateData: Promise<string> | null = null;

  constructor(private productService: ProductService,
              public cartService: CartService) {

  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  public addToCart(title: string, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = title;
    // this.products = this.products.filter(item => item.title.toUpperCase() !== title.toUpperCase());
    this.cartService.count ++
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

  ngOnInit(): void {
    this.lateData = new Promise<string>(function (resolve, reject) {
      setTimeout(() => {
        resolve('hello');
      }, 3000)
    })

    const scripts = ['jquery-3.7.1.min.js', 'wow.min.js', 'jquery.magnific-popup.min.js', 'parallax.min.js', 'jquery.inputmask.min.js']


    scripts.forEach(script => {
      let node = document.createElement('script');
      node.src = `assets/scripts/${script}`;
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('body')[0].appendChild(node);

    })
    this.products = this.productService.getProducts();
  }


}
