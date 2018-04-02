import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-neworeditempl',
  templateUrl: './neworeditempl.component.html',
  styleUrls: ['./neworeditempl.component.css']
})
export class NeworEditEmployeeComponent implements OnInit {

  constructor(private ar: ActivatedRoute) { }
  public  empidFromParent:any;
  
  ngOnInit() {
    this.ar.params.subscribe(data => {
      this.empidFromParent = data.empid;
    });
  }

}