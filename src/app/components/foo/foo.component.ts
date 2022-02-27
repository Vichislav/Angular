import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  @Input()
  counter = 0;

  @Output()
  counterChange = new EventEmitter<number>();
  @Input() // то что принемаем в компонент
  title!: string;

  @Output() // то что подаем на выход из компонента
  sayHi = new EventEmitter<string>();

  constructor() {
    console.log('constructor', this.title);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.title);
  }

  onSayHi() {
    this.sayHi.emit(this.title + 'Hello');
  }

}
