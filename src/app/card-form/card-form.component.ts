import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { DateFormControl } from "../date-form-control";

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    expiration: new FormControl('', [Validators.required]),
    securityCode: new FormControl('', [Validators.required]),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.cardForm.value);
  }

  resetForm() {
    this.cardForm.reset();
  }

}
