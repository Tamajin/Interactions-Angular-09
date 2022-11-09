import { Component, OnInit } from '@angular/core';
import { FieldsForm } from '../models/KittenCreateForm';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent implements OnInit {
  fieldsForm: FieldsForm = {
    name: '',
    race: '',
    birthday: '',
    picture: '',
    isMouseOver: false,
  };

  catsList: FieldsForm[] = [
    {
      name: 'Clovis',
      race: 'Persan',
      birthday: '12/12/1990',
      picture: 'https://placekitten.com/200/300',
      isMouseOver: false,
    },
    {
      name: 'Miaouss',
      race: 'Pokemon',
      birthday: '12/12/1990',
      picture:
        'https://i.pinimg.com/originals/50/14/68/501468d475e49bda64dec89a3bf07680.jpg',
      isMouseOver: false,
    },
  ];

  catsAdoptedList: any[] = [];

  adoption(event: any): void {
    this.catsAdoptedList.push(event);
  }

  addCat(): void {
    this.catsList.push(this.fieldsForm);
    this.isFormVisible = !this.isFormVisible;
  }

  setMouseOver(event: boolean): void {
    for (let i = 0; i < this.catsList.length; ) {
      if (event) {
        this.catsList[i].isMouseOver = true;
        i++;
      }
    }
  }

  setMouseOut(event: boolean): void {
    for (let i = 0; i < this.catsList.length; ) {
      if (event) {
        this.catsList[i].isMouseOver = false;
        i++;
      }
    }
  }

  isFormVisible: boolean = false;

  displayForm(): void {
    this.isFormVisible = true;
  }
  onIsSubmitted(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  constructor() {}

  ngOnInit(): void {}
}
