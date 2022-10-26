import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  @Input() label : string = '';
  @Input() control: any;
  @Input() id: string = '';
  @Input() type: string = '';
  @Input() mask: any;

  constructor() { }

  ngOnInit(): void {
  }

  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }

}
