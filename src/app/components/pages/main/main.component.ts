import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {




  constructor(public cartService: CartService) {

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
