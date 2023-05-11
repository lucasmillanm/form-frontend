import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UniFunctionsService {

  constructor(
    private router: Router
  ) { }

  goToGetForm() {
    this.router.navigate(['/personal-card']);
  }

  goToSubmitForm() {
    this.router.navigate(['/home']);
  }

  goToEdit() {
    this.router.navigate(['/edit']);
  }
}
