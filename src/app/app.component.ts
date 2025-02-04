import { Component } from '@angular/core';
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./css/animate.min.css', './css/hover-min.css', './css/magnific-popup.css', './app.component.scss', ],
})
export class AppComponent {
  // pizza_image_2.png
  public products: ProductType[] = [
    {
      image: 'pizza_image_1.png',
      title: 'Мясная Делюкс',
      description: `Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы`
    },
    {
      image: '',
      title: 'Морская Премиум',
      description: `Перец, сыр, креветки, кальмары, мидии, лосось`
    },
    {
      image: 'pizza_image_3.png',
      title: 'Бекон и Сосиски',
      description: `Бекон, сыр, сосиски, ананас, томатная паста`
    },
    {
      image: 'pizza_image_4.png',
      title: 'Куриная Делюкс',
      description: `Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста`
    },
    {
      image: 'pizza_image_5.png',
      title: 'Барбекю Премиум',
      description: `Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили`
    },
    {
      image: 'pizza_image_6.png',
      title: 'Пепперони Дабл',
      description: `Пепперони, сыр, колбаса 2 видов: обжаренная и вареная`
    },
    {
      image: 'pizza_image_7.png',
      title: 'Куриное трио',
      description: `Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы`
    },
    {
      image: 'pizza_image_8.png',
      title: 'Сырная',
      description: `Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный`
    },
  ]

  public formValues = {
    productTitle: '',
    address: '',
    name: '',
    phone: '',
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  public addToCart(title: string, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = title;
    // this.products = this.products.filter(item => item.title.toUpperCase() !== title.toUpperCase());
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
    const scripts = ['jquery-3.7.1.min.js', 'wow.min.js', 'jquery.magnific-popup.min.js', 'parallax.min.js', 'jquery.inputmask.min.js']


    scripts.forEach(script => {
      let node = document.createElement('script');
      node.src = `assets/scripts/${script}`;
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('body')[0].appendChild(node);

    })
  }


}
