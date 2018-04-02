import { Component, OnInit } from '@angular/core';
import { schema as mySchema } from '../../assets/scripts/excelSchema';
import { AngularFireDatabase } from 'angularfire2/database';


declare var readXlsxFile: any;
declare var $: any;

@Component({
  selector: 'app-bulkupload',
  templateUrl: './bulkupload.component.html',
  styleUrls: ['./bulkupload.component.css']
})
export class BulkuploadComponent implements OnInit {

  constructor(public af: AngularFireDatabase) {

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
           Object.defineProperty(this.mydata,(item.empid),{value: item, writable:true,enumerable:true});
        });


      console.log(this.mydata);
      this.af.list('/').set('empDB', this.mydata).then((success:any) => {
        alert("data inserted successfully"+success.message);
      });
    });


    // now we have got the excel prased as JSON, ican preprocess it and go ahead with saving into the Firebase database.
    // this.preProcessMyJSON();



  }

}