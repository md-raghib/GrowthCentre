import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormControl } from "@angular/forms";


export interface Food {
  value: string;
  display: string;
}

@Component({
  selector: 'app-psychometric',
  templateUrl: './psychometric.component.html',
  styleUrls: ['./psychometric.component.scss']
})
export class PsychometricComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit() {
     this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
     });
     this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
     });
  }

}
