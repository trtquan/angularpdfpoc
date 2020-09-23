import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PrintService} from '../print.service';

@Component({
  selector: 'app-cdc',
  templateUrl: './cdc.component.html',
  styleUrls: ['./cdc.component.css']
})

export class CDCComponent implements OnInit {
  CDCIds: string[];
  CDCDetails: Promise<any>[];

  constructor(route: ActivatedRoute,
              private printService: PrintService) {
    this.CDCIds = route.snapshot.params['cdcIds']
      .split(',');
  }

  ngOnInit() {
    this.CDCDetails = this.CDCIds
      .map(id => this.getCDCDetails(id));
    Promise.all(this.CDCDetails)
      .then(() => this.printService.onDataReady());
  }

  getCDCDetails(CDCId) {
    const amount = Math.floor((Math.random() * 100));
    return new Promise(resolve =>
      setTimeout(() => resolve({amount}), 1000)
    );
  }

}
