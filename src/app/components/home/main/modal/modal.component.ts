import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  title;
  data;
  url = '';

  constructor( public modalRef: BsModalRef) { }

  ngOnInit() {
    console.log(this.data);
  }

}
