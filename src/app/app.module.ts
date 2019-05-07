import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderComponent } from './components/home/header/header.component';
import { MainComponent } from './components/home/main/main.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { ModalComponent } from './components/home/main/modal/modal.component';

import { DataService } from './services/data.service';
import { ClockService } from './services/clock.service';

import { SearchPipe } from './components/home/main/serch.pipe';
import { EditModalComponent } from './components/admin/edit-modal/edit-modal.component';


// определение маршрутов
const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'admin', component: AdminComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    HeaderComponent,
    MainComponent,
    SearchPipe,
    FooterComponent,
    ModalComponent,
    EditModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    OrderModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService, ClockService],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalComponent,
    EditModalComponent
  ]
})
export class AppModule { }
