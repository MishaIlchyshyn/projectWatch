import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ClockService } from '../../../services/clock.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  title;
  data;
  url = '';

  constructor( public modalRef: BsModalRef, private _clockService: ClockService) { }

  ngOnInit() {
    console.log(this.data);
  }

  saveChanges(id: number, data) {
    this._clockService.editClock(id, data)
  }

  onSelectFileOnEdit() {
    
  }

}
