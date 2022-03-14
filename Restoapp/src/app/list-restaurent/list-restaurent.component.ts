import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list-restaurent',
  templateUrl: './list-restaurent.component.html',
  styleUrls: ['./list-restaurent.component.css'],
})
export class ListRestaurentComponent implements OnInit {
  constructor(private commonServices: CommonService) {}
  collection: any;
  modalData?: any = '';
  alert: boolean = false;
  restoName: string;

  ngOnInit(): void {
    // this.commonServices.getRestoList().subscribe((data) => {
    //   this.collection = data;
    // });
    this.fetchData();
  }

  initializeModal(id: number) {
    this.commonServices.getCurrentData(id).subscribe((data) => {
      this.modalData = data;
    });
  }

  removeResto(id: number) {
    this.commonServices.deleteResto(id).subscribe(() => {
      this.fetchData();
    });
    this.alert = true;
    setTimeout(() => {
      this.alert = false;
    }, 3000);
  }

  fetchData() {
    this.commonServices.getRestoList().subscribe((data) => {
      this.collection = data;
    });
  }
}
