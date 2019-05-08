import { Component, OnInit } from '@angular/core';
import { Watch } from '../../../models/watch.model';
import { ClockService } from '../../../services/clock.service';
import { ModalComponent } from './modal/modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  imgPath: string;
  p;
  order: string = 'price';
  reverse: boolean = false;

  modalRef: BsModalRef;

  searchStr = '';

  clocks : Watch[];

  constructor(private clockService: ClockService, private _modalService: BsModalService, private orderPipe: OrderPipe) {
    this.clocks = orderPipe.transform(this.clocks, 'price');
   }

  viewWatch (watch) {
    this.modalRef = this._modalService.show(ModalComponent,  {
      initialState: {
        title: watch.title,
        data: {
          watch: watch
        }
      }
    });
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  ngOnInit() {
    this.clocks = this.clockService.getClock();
  }

}
