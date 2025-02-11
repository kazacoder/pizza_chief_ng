import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {

  private products: ProductType[] =[
    {
      id: 1,
      image: 'pizza_image_1.png',
      title: 'Мясная Делюкс',
      description: `Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы`,
      datetime: '2025-02-04 15:01:00',
    },
    {
      id: 2,
      image: '',
      title: 'Морская Премиум',
      description: `Перец, сыр, креветки, кальмары, мидии, лосось`,
      datetime: '2025-02-04 11:06:00',
    },
    {
      id: 3,
      image: 'pizza_image_3.png',
      title: 'Бекон и Сосиски',
      description: `Бекон, сыр, сосиски, ананас, томатная паста`,
      datetime: '2025-12-04 15:00:00',
    },
    {
      id: 4,
      image: 'pizza_image_4.png',
      title: 'Куриная Делюкс',
      description: `Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста`,
      datetime: '2025-02-28 13:00:00',
    },
    {
      id: 5,
      image: 'pizza_image_5.png',
      title: 'Барбекю Премиум',
      description: `Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили`,
      datetime: '2025-02-04 15:00:00',
    },
    {
      id: 6,
      image: 'pizza_image_6.png',
      title: 'Пепперони Дабл',
      description: `Пепперони, сыр, колбаса 2 видов: обжаренная и вареная`,
      datetime: '2025-02-04 05:00:00',
    },
    {
      id: 7,
      image: 'pizza_image_7.png',
      title: 'Куриное трио',
      description: `Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы`,
      datetime: '2025-02-04 15:00:00',
    },
    {
      id: 8,
      image: 'pizza_image_8.png',
      title: 'Сырная',
      description: `Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный`,
      datetime: '2025-02-04 15:00:00',
    },
  ];

  constructor() { }
  //ajax

  // pizza_image_2.png
  getProducts(): ProductType[] {
    return this.products
  }

  getProduct(id: number): ProductType | undefined {
    return this.products.find(product => product.id === id)
  }

}
