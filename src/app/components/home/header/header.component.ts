import { Component, OnInit } from '@angular/core';
import { Subscription } from './subscription';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  items: Subscription[] = [];

  constructor(private dataService: DataService) { }

  addItem(mail: string) {
    this.dataService.addData(mail);
  }

  ngOnInit() {
    this.items = this.dataService.getData();
  }

}
