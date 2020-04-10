import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';

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

  private changeLayout(state: BreakpointState) {
    this.smallScreen = state.matches;
  }
}
