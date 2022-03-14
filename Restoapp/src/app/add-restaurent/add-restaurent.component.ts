import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-restaurent',
  templateUrl: './add-restaurent.component.html',
  styleUrls: ['./add-restaurent.component.css']
})
export class AddRestaurentComponent implements OnInit {
  constructor( private commonService : CommonService) { }

  alert:boolean = false;
  validityChecker:boolean = false;

  addRestaurent = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.minLength(4)]),
    address : new FormControl('', [Validators.required, Validators.minLength(2)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    mobile : new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
  })


  ngOnInit(): void {
  }
  createResto(){
    console.log(this.addRestaurent.value.valid);
    if(this.addRestaurent.valid){
      this.commonService.addResto(this.addRestaurent.value).subscribe();
      this.alert = true;
      this.validityChecker = false;
      setTimeout(this.alertTimer.bind(this), 3000);
    }else{
      this.validityChecker = true;
      this.alert = false;
    }
  }

  alertTimer(){
    this.alert = false;
    this.addRestaurent.reset({});
  }
}
