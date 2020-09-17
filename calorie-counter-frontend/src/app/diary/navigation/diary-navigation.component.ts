import { Component, OnInit } from '@angular/core';
import { AppEvent, AppStateService } from '../../shared/services/app-state.service';

@Component({
  selector: 'app-diary-navigation',
  templateUrl: './diary-navigation.component.html',
  styleUrls: ['./diary-navigation.component.scss']
})
export class DiaryNavigationComponent implements OnInit {

  constructor(private appStateService: AppStateService) {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.appStateService.send(AppEvent.Toggle);
  }
}
