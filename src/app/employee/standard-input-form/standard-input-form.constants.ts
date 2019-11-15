import { Validators } from '@angular/forms';

export enum PAGES {
  PERSONAL,
  EMPLOYMENT
}

const phoneValidator = [Validators.minLength(10), Validators.maxLength(10)];

export const employeeForm = {
  firsName: ['', Validators.required],
  middleName: [''],
  lastName: ['', Validators.required],
  dateOfBirth: ['', Validators.required],
  dateOfJoin: ['', Validators.required],
  aadharNumber: [
    '',
    [Validators.required, Validators.minLength(12), Validators.maxLength(12)]
  ],
  nameOnAdhar: ['', Validators.required],
  aadharDob: ['', Validators.required],
  pancardNumber: ['', Validators.required],
  nameOnPancard: ['', Validators.required],
  uan: ['', Validators.required],
  passportNumber: ['', Validators.required],
  nameOnPassport: ['', Validators.required],
  personalEmail: ['', [Validators.required, Validators.email]],
  contactNumber: ['', [Validators.required, ...phoneValidator]],
  bloodGroup: ['', Validators.required],
  maritalStatus: ['', Validators.required],
  fathersName: ['', Validators.required],
  fathersNumber: ['', [Validators.required, ...phoneValidator]],
  spouseName: [''],
  spouseNumber: ['', phoneValidator],
  emergencyContactName: ['', Validators.required],
  emergencyContactRelationship: ['', Validators.required],
  emergencyContactNumber: ['', [Validators.required, ...phoneValidator]],
  permenentAddress: ['', Validators.required],
  permenentAddressLandmark: ['', Validators.required],
  currentAddress: ['', Validators.required],
  currentAddressLandmark: ['', Validators.required]
};
