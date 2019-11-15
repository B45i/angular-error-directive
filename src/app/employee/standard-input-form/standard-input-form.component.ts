import { Component, OnInit, OnChanges } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
} from '@angular/forms';

import { PAGES, employeeForm } from './standard-input-form.constants';

@Component({
  selector: 'app-standard-input-form',
  templateUrl: './standard-input-form.component.html',
  styleUrls: ['./standard-input-form.component.css']
})
export class StandardInputFormComponent implements OnInit, OnChanges {
  public PAGES = PAGES;
  public currentPage = this.PAGES.PERSONAL;
  public personalForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    setInterval(() => console.log(this.personalForm.value), 2000);
  }

  ngOnChanges() {}

  public switchPage(page: PAGES) {
    this.currentPage = page;
  }

  private initForm() {
    this.personalForm = this.fb.group(employeeForm);
  }
}
