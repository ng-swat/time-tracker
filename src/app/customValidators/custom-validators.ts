import {AbstractControl} from '@angular/forms';

export class CustomValidators {

  static comparePasswordsValidator(passwords: AbstractControl) {
    if (passwords.get('password').value === passwords.get('confirmPassword').value) {
      return null;
    }
    return {comparePasswordsValidator: true};
  }
}
