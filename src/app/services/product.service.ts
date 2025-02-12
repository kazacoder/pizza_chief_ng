import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";

@Injectable()
export class ProductService {

  private products: ProductType[] =[];

  constructor(private http: HttpClient) { }
  //ajax

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.ru/pizzas');
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.ru/pizzas?id=${id}`);
  }

  createOrder(data: { product: string, address: string, phone: string }) {
    return this.http.post<{ success: boolean, message?: string }>(`https://testologia.ru/order-pizza?`, data);
  }

}

// getProducts(): Observable<ProductType[]> {
//   let params = new HttpParams();
//   params = params.set('extraField', 1);
//
//   return this.http.get<{data: ProductType[]}>('https://testologia.ru/pizzas', {
//     headers: new HttpHeaders({ Authorization: 'auth-token' }),
//     observe: 'response',
//     params: params
//   })
//     .pipe(
//       tap(result => console.log(result)),
//       map (result => result.body ? result.body.data: []),
//     );
// }

// const products: ProductType[] =[
//   {
//     id: 1,
//     image: 'pizza_image_1.png',
//     title: 'Мясная Делюкс',
//     description: `Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы`,
//     datetime: '2025-02-04 15:01:00',
//   },
//   {
//     id: 2,
//     image: '',
//     title: 'Морская Премиум',
//     description: `Перец, сыр, креветки, кальмары, мидии, лосось`,
//     datetime: '2025-02-04 11:06:00',
//   },
//   {
//     id: 3,
//     image: 'pizza_image_3.png',
//     title: 'Бекон и Сосиски',
//     description: `Бекон, сыр, сосиски, ананас, томатная паста`,
//     datetime: '2025-12-04 15:00:00',
//   },
//   {
//     id: 4,
//     image: 'pizza_image_4.png',
//     title: 'Куриная Делюкс',
//     description: `Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста`,
//     datetime: '2025-02-28 13:00:00',
//   },
//   {
//     id: 5,
//     image: 'pizza_image_5.png',
//     title: 'Барбекю Премиум',
//     description: `Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили`,
//     datetime: '2025-02-04 15:00:00',
//   },
//   {
//     id: 6,
//     image: 'pizza_image_6.png',
//     title: 'Пепперони Дабл',
//     description: `Пепперони, сыр, колбаса 2 видов: обжаренная и вареная`,
//     datetime: '2025-02-04 05:00:00',
//   },
//   {
//     id: 7,
//     image: 'pizza_image_7.png',
//     title: 'Куриное трио',
//     description: `Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы`,
//     datetime: '2025-02-04 15:00:00',
//   },
//   {
//     id: 8,
//     image: 'pizza_image_8.png',
//     title: 'Сырная',
//     description: `Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный`,
//     datetime: '2025-02-04 15:00:00',
//   },
// ];
