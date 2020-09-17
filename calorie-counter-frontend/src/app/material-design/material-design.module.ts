import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { HammerModule } from '@angular/platform-browser';

const modules: any[] = [
  LayoutModule,
  MatTableModule,
  MatListModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  HammerModule
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class MaterialDesignModule {
}
