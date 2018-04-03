import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-neworeditempl',
  templateUrl: './neworeditempl.component.html',
  styleUrls: ['./neworeditempl.component.css']
})
export class NeworEditEmployeeComponent implements OnInit {

  public empidFromParent: any;
  empdata: any;
  // designations = [
  //   { label: 'Designation', value: null },
  //   { label: 'Associate', value: { id: 1, name: 'New York', code: 'NY' } },
  //   { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
  //   { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
  //   { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
  //   { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
  // ];

  designations = [
    { name: 'Associate', code: 'Associate' },
    { name: 'Team Lead', code: 'Team Lead' },
    { name: 'Manager', code: 'Manager' },
    { name: 'DL', code: 'DL' },
    { name: 'CXO', code: 'CXO' }
  ];


  selectedDesignation;
  selectedExperience;
  startdate;

  experiences = [
    { name: '< 1', code: '< 1' },
  ];

  constructor(private ar: ActivatedRoute, private dataService: DataService) {
    this.empidFromParent = null;
    for (let i = 1; i < 16; i++) {
      this.experiences.push({ name: i.toString(), code: i.toString() });
    }
    this.experiences.push({ name: '> 15', code: '> 15' });

    this.empdata = null;
  }


  ngOnInit() {
    this.empidFromParent = this.ar.snapshot.params.empid;
    if (this.empidFromParent) {
      this.dataService.getOneEmp(this.empidFromParent).subscribe((data) => {
        console.log("we got some data")
        console.log(data);
        this.empdata = data;
      })
    }
  }

}