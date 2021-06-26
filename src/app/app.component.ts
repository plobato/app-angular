import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  busqueda = 'tetazo';
  posts: IPost[] = [];

  constructor(){

  }

  get currentBusqueda(){
    return JSON.stringify(this.busqueda);
  }
}

interface IPost{
  id: string;
  title: string;
  //body: string;
}