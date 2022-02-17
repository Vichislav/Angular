import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss'], //подключили стили

})

export class ProductComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log(1);
  }
}
