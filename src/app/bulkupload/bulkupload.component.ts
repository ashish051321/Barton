import { Component, OnInit } from '@angular/core';
import { schema as mySchema } from '../../assets/scripts/excelSchema';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


declare var readXlsxFile: any;
declare var $: any;

@Component({
  selector: 'app-bulkupload',
  templateUrl: './bulkupload.component.html',
  styleUrls: ['./bulkupload.component.css']
})
export class BulkuploadComponent implements OnInit {

  constructor(public af: AngularFireDatabase, private router: Router, private dataService: DataService) {

  }
  mydata: any;

  ngOnInit() {
    this.mydata = {};
  }

  processFile(files) {
    console.log(files);
    console.log($);
    readXlsxFile(files[0], { schema: mySchema }).then(({ rows, errors }) => {

      rows.forEach(item => {
        Object.defineProperty(this.mydata, (item.empid), { value: item, writable: true, enumerable: true });
      });


      // console.log(this.mydata);
      // now we have got the excel prased as JSON, ican preprocess it and go ahead with saving into the Firebase database.
      this.preProcessMyJSON();
      // console.log(this.mydata);
      
      this.dataService.setEmpDetails(this.mydata).then(msg => {
        console.log("Data updated successfully");
        setTimeout(() => {
          this.router.navigate(['empdetails']);
        }, 2000);

      }).catch(msg => {

        console.log("Data update failed", msg);

      });
    });





  }

  preProcessMyJSON() {

    let masterkeys = Object.keys(mySchema);

    Object.keys(this.mydata).forEach((key) => {
      // key: the name of the object key
      // index: the ordinal position of the key within the object 
      let item = this.mydata[key];
      let itemkeys = Object.keys(item);
      masterkeys.forEach(mkitem => {
        if (!itemkeys.includes(mkitem)) {
          Object.defineProperty(item, mkitem, { value: "null", writable: true, enumerable: true });
        }
      });

    });

  }


}