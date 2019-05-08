import { Component, OnInit } from '@angular/core';
import { Subscription } from '../home/header/subscription';
import { DataService } from '../../services/data.service';
import { ClockService } from '../../services/clock.service';
import { Watch } from '../../models/watch.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EditModalComponent } from './edit-modal/edit-modal.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  modalRef: BsModalRef;
  title: string;
  price: number;
  id: number;

  imgPath;

  items: Subscription[] = [];
  clocks: Watch[] = [];

  constructor(private dataService: DataService, private clockService: ClockService,  private _modalService: BsModalService) { }

  addItem(mail: string) {
    this.dataService.addData(mail);
  }

  addClock(title: string, price: number, id: number) {
    this.clockService.addClock(this.imgPath, title, price, id);
  }

  selectImage(event) {
    console.log(event.target.files[0].name);
    this.imgPath = '../../../../assets/images/' + event.target.files[0].name.toString();
  }

  ngOnInit() {
    this.items = this.dataService.getData();
    this.clocks = this.clockService.getClock();
  }

  removeClock(id: number) {
    this.clockService.removeClock(id);
  }

  editClock(clock) {
    this.modalRef = this._modalService.show(EditModalComponent,  {
      initialState: {
        title: clock.title,
        data: {
          watch: clock
        }
      }
    });
  }
}
