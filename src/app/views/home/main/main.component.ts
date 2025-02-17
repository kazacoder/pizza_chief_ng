import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CartService} from "../../../shared/services/cart.service";
import {map, Subject, Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  // private observable: Observable<string | number>;
  // private observable: Observable<number>;
  private promice: Promise<string>;
  private subscription: Subscription | null = null;
  private subject: Subject<number>;
  public popupData = 'main component code';
  // @ViewChild('popup')
  // popup!: ElementRef<ElementRef>;

  constructor(public cartService: CartService) {
    let count = 0;

    const interval = setInterval(() => {
      this.subject.next(count++)
    }, 1000)


    const timeout1 = setTimeout(() => {
      this.subject.next(128);
    }, 2000)
    const timeout2 = setTimeout(() => {
      this.subject.complete();
    }, 4000)



    this.subject = new Subject<number>();
    // this.observable = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);


    // this.observable = new Observable(observer => {
    //   let count = 0;
    //
    //   const interval = setInterval(() => {
    //     observer.next(count++)
    //   }, 1000)
    //
    //
    //   const timeout1 = setTimeout(() => {
    //     observer.next(128);
    //   }, 2000)
    //   const timeout2 = setTimeout(() => {
    //     observer.complete();
    //   }, 4000)
    //
    //   const timeout3 = setTimeout(() => {
    //     observer.error('ERROR');
    //   }, 5000)
    //
    //   return {
    //     unsubscribe() {
    //       clearInterval(interval);
    //       clearTimeout(timeout1);
    //       clearTimeout(timeout2);
    //       clearTimeout(timeout3);
    //     }
    //   }
    //
    // })

    this.promice = new Promise((resolve) => {
      setTimeout(() => {
        resolve('hello Promise');
      }, 2000)
    })
  }

  ngOnInit(): void {

    console.log(environment.production)

    const scripts = ['jquery-3.7.1.min.js', 'wow.min.js', 'jquery.magnific-popup.min.js', 'parallax.min.js', 'jquery.inputmask.min.js']
    scripts.forEach(script => {
      let node = document.createElement('script');
      node.src = `assets/scripts/${script}`;
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('body')[0].appendChild(node);
    })

    this.subscription = this.subject.subscribe(
      {
        next: (param: string | number) => {
          console.log(`subscriber :1 ${param}`);
        },
        error: (err: string) => {
          console.log(`ERROR!!! :${err}`);
        },
        complete: () => {
          console.log(`completed`);
        }
      }
    )

    // this.subscription = this.observable.subscribe(
    //   {
    //     next: (param: string | number) => {
    //       console.log(`subscriber :1 ${param}`);
    //     },
    //     error: (err: string) => {
    //       console.log(`ERROR!!! :${err}`);
    //     },
    //     complete: () => {
    //       console.log(`completed`);
    //     }
    //   }
    // )

    // this.promice.then((param: string) => {
    //   console.log(param);
    // })

  }


  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  ngAfterViewInit() {
    console.log('hello')
    // this.popupComponent.open()
    // this.modalService.open(this.popup, {})
  }

  test() {
    this.subject
      .pipe(
        map((number: number) => {
          return 'Число ' + number * 12
        })
      )
      .subscribe((param: string | number) => {
        console.log(`subscriber :2 ${param}`);
      })


    // this.observable
    //   .pipe(
    //     map((number: number) => {
    //       return 'Число ' + number * 12
    //     })
    //   )
    //   .subscribe((param: string | number) => {
    //     console.log(`subscriber :2 ${param}`);
    //   })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
