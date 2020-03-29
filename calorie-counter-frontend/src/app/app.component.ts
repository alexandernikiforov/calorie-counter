import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {MatDrawerMode} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calorie-counter';
  smallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.smallScreen = breakpointObserver.isMatched('(max-width: 959.99px)');
    breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small],)
      .subscribe(result => {
        this.changeLayout(result);
      });
  }

  public getMode(): MatDrawerMode {
    return this.smallScreen ? 'over' : 'side';
  }

  private changeLayout(state: BreakpointState) {
    this.smallScreen = state.matches;
  }
}
