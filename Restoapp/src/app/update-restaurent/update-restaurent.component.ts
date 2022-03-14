import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-update-restaurent',
  templateUrl: './update-restaurent.component.html',
  styleUrls: ['./update-restaurent.component.css'],
})
export class UpdateRestaurentComponent implements OnInit {
  constructor(
    private commonService: CommonService,
    private _activatedRoute: ActivatedRoute,
    private formBuilder : FormBuilder
  ) {}

  alert: boolean = false;
  ValidityCheck: boolean = false;
  restaurentId: any;
  collection: any;

  editRestaurent = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    address: ['', [Validators.required]],
    email: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.commonService
      .getCurrentData(this._activatedRoute.snapshot.params['id'])
      .subscribe((result) => {
        this.collection = result;
        this.editRestaurent = this.formBuilder.group({
          name: [this.collection.name, [Validators.required, Validators.minLength(4)]],
          address: [this.collection.address, [Validators.required,]],
          email: [this.collection.email, [Validators.required, Validators.email]],
          mobile: [this.collection.mobile,[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        });
      });
  }

  updateResto() {
    if(this.editRestaurent.invalid){
      this.ValidityCheck = true;
      setTimeout(() => {
        this.ValidityCheck = false;
      }, 5000);
    }else{
      this.commonService.updateCurrentData(this._activatedRoute.snapshot.params['id'], this.editRestaurent.value).subscribe();
      this.alert = true;
      this.ValidityCheck = false
      setTimeout(() => {
        this.alert = false;
      }, 3000);
    }
  }

}
