import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output()
  tapNavMenu = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.tapNavMenu.emit();
  }
}
