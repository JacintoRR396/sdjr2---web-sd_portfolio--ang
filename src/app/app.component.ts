import { Component, OnInit } from '@angular/core';

import { ModalStore } from './shared/store/app-modal.service';

import { ModalConfig } from './shared/components/bootstrap/app-bs-modal/interfaces/app-bs-comp-modal.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  title = 'sd-portfolio';
  modalShow: boolean = false;
  modalConfig!: ModalConfig;

  constructor(
    private readonly modalStore: ModalStore,
  ){}

  ngOnInit(): void {
    this.modalStore.show$
      .subscribe( (resp) => this.modalShow = resp );
    this.modalStore.config$.subscribe( (resp) => this.modalConfig = resp );
  }

  onClickModalBtnClose(): void {
    this.modalStore.fnBtnClose$.subscribe(
      (fn) => fn()
    );
  }
  onClickModalBtnLeft(): void {
    this.modalStore.fnBtnLeft$.subscribe(
      (fn) => fn()
    );
  }
  onClickModalBtnRight(): void {
    this.modalStore.fnBtnRight$.subscribe(
      (fn) => fn()
    );
  }
}
