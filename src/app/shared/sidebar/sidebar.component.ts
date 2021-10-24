import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from 'src/app/interfaces/HttpErrorResponse.interface';

import { Menu } from './interfaces/menu.interface';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  job: string = 'Full Stack Web Developer';
  menu: Menu = this.menuService.getMenuDefault();

  constructor( private menuService: MenuService ) { }

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu(): void {

    this.menuService.getMenu()
      .subscribe( ( resp ) => {
        console.log( resp );
        this.menu = resp;
      }, ( err ) => {
        // TODO
        const error: HttpErrorResponse = { ...err.error };
        console.error( error );
      });

  }

}
