import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/services/data/data.service';
import { Dropdown } from 'primeng/components/dropdown/dropdown';
import { SelectItem } from 'primeng/api';




@Component({
  selector: 'app-neworeditempl',
  templateUrl: './neworeditempl.component.html',
  styleUrls: ['./neworeditempl.component.css']
})
export class NeworEditEmployeeComponent implements OnInit {

  public empidFromParent: any;
  empdata: any;


  designationList = [
    { label: 'Associate', value: 'Associate' },
    { label: 'Team Lead', value: 'Team Lead' },
    { label: 'Manager', value: 'Manager' },
    { label: 'DL', value: 'DL' },
    { label: 'CXO', value: 'CXO' }
  ];

  locationList = [
    { label: 'India', value: 'India' },
    { label: 'US', value: 'US' },
    { label: 'Mexico', value: 'Mexico' },
    { label: 'Canada', value: 'Canada' },
    { label: 'Malaysia', value: 'Malaysia' }
  ];

  projectList = [
    { label: 'Dev', value: 'Dev' },
    { label: 'ITIS', value: 'ITIS' },
    { label: 'QA', value: 'QA' },
    { label: 'BPS', value: 'BPS' }
  ];

  managerList = [
    { label: 'Ashish', value: 'Ashish' },
    { label: 'Rashmi', value: 'Rashmi' },
    { label: 'Anup', value: 'Anup' },
    { label: 'Kunal', value: 'Kunal' }
  ];

  selectedDesig;
  selectedTotalExp;
  selectedTCSExp;
  selLoc;
  startdate;
  selectedProjects;
  selectedManagers;

  expList = [
    { label: '< 1', value: '< 1' }
  ];

  constructor(private ar: ActivatedRoute, private dataService: DataService) {
    this.empidFromParent = null;
    for (let i = 1; i < 16; i++) {
      this.expList.push({ label: i.toString(), value: i.toString() });
    }
    this.expList.push({ label: '> 15', value: '> 15' });

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


  clearFilter(dropdown: Dropdown) {
    dropdown.resetFilter();
  }

}