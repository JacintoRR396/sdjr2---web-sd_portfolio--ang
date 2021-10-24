import { Component, OnInit } from '@angular/core';

import { Menu } from './interfaces/menu.interface';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  job: string = 'Full Stack Web Developer';
  menu: Menu;

  constructor( private menuService: MenuService ) { }

  ngOnInit(): void {
    this.menu = this.menuService.getMenu();
  }

}
