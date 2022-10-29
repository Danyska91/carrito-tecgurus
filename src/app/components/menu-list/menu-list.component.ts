import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menus: Menu[]=[{
    title: 'Profile',
    path: 'profile'
  },{
    title:'Products', 
    path: 'products'
  },{
    title:'Capitulo 7', 
    path: 'capitulo7'
  },{
    title:'Capitulo 8', 
    path: 'capitulo8'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
