import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  form = {
    name: '',
    lName: '',
    contactNumber: '',
    address: '',
    tableIterator: ''
  };
  display: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  SaveForm(){
    console.log(this.form);
    this.display = true;
  }

  refreshPage(){
    window.location.reload();
  }


}
