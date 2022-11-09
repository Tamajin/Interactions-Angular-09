import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FieldsForm } from '../models/KittenCreateForm';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css'],
})
export class ListKittenComponent implements OnInit {
  @Input()
  cats = {
    name: '',
    race: '',
    birthday: '',
    picture: '',
    isMouseOver: false,
  };

  @Output()
  CatsAdopted: EventEmitter<any> = new EventEmitter();

  @Input()
  catsList!: FieldsForm[];

  @Output()
  isMouseOver: EventEmitter<boolean> = new EventEmitter();

  @Output()
  isMouseOut: EventEmitter<boolean> = new EventEmitter();

  setMouseOver(): void {
    this.isMouseOver.emit(true);
  }

  setMouseOut(): void {
    this.isMouseOut.emit(true);
  }

  adoption(): void {
    this.CatsAdopted.emit(this.catsList);
  }

  constructor() {}

  ngOnInit(): void {}
}
