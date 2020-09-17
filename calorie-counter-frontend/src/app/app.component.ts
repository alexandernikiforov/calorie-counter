import { Component, OnDestroy, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { AppStateService } from './shared/services/app-state.service';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'calorie-counter';
  smallScreen = false;

  @ViewChild('sidenav') sidenav: MatSidenav;
  private events: Subscription;

  constructor(private breakpointObserver: BreakpointObserver, private appStateService: AppStateService) {
    this.smallScreen = breakpointObserver.isMatched('(max-width: 959.99px)');
    breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small],)
      .subscribe(result => {
        this.changeLayout(result);
      });

    this.events = appStateService.getEvents().subscribe(event => this.sidenav.toggle())
  }

  ngOnDestroy(): void {
    this.events.unsubscribe();
  }

  private changeLayout(state: BreakpointState) {
    this.smallScreen = state.matches;
  }
}
