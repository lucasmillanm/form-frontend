import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {FormService} from '../services/form.service';
import {Form} from '../models/form';
import {UniFunctionsService} from '../services/uni-functions.service';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.page.html',
  styleUrls: ['./personal-card.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PersonalCardPage {

  id: number = 0;
  fileName: string = '';
  form?: Form;

  constructor(
    private formService: FormService,
    public uniFunctions: UniFunctionsService
  ) {
  }

  getFormByID(id: number): void {
    this.formService.getForm(id).subscribe(data => {
      this.form = data;
    });
  }
}
