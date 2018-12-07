import { DataService } from './../data.service';
import { FormGroup } from '@angular/forms';

export function valCred(controlName: string, data: DataService) {

    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];



        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
