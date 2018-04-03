import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
dataSource;

  tableheaders: any = [
    "EmpID",
    "Full Name",
    "Designation",
    "Experience",
    "Projects",
    "Competencies"
  ];

  constructor(private dataService: DataService) { 
    this.dataSource = null;
  }

  ngOnInit() {
    this.dataSource = this.dataService.getEmpDetails();
  }

}
