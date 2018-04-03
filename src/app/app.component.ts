import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';


declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: MenuItem[];


  constructor(private router: Router) {

  }
  ngOnInit() {
    this.items = [
      {label:'Database',routerLink: ['empdetails']},
      {label:'Add Employee',icon:'fa-plus',routerLink: ['edit']},
      {label:'Manage Metadata'},
      {label:'Bulk Upload',routerLink: ['bulkupload']}
      // {
      //   label: 'File',
      //   items: [{
      //     label: 'New',
      //     icon: 'fa-plus',
      //     items: [
      //       { label: 'Project' },
      //       { label: 'Other' },
      //     ]
      //   },
      //   { label: 'Open' },
      //   { label: 'Quit' }
      //   ]
      // },
      // {
      //   label: 'Edit',
      //   icon: 'fa-edit',
      //   items: [
      //     { label: 'Undo', icon: 'fa-mail-forward' },
      //     { label: 'Redo', icon: 'fa-mail-reply' }
      //   ]
      // }
    ];
  }

  searchandEdit(empid) {//her i have got html element reference
    var x = empid.value;
    empid.value = "";
    this.router.navigate(['edit/' + x])
  }

}
