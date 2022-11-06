import { Component, OnInit } from '@angular/core';
import { FieldsForm } from '../models/KittenCreateForm';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent implements OnInit {
  fieldsForm!: FieldsForm;

  constructor() {}

  ngOnInit(): void {}
}
