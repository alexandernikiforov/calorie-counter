import {Component, OnDestroy, OnInit} from '@angular/core';
import {DiaryService} from '../core/diary.service';
import {Diary} from '../core/diary.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  diary: Diary;
  displayedColumns: string[] = ['food', 'actions'];

  diary$: Subscription;

  constructor(private diaryService: DiaryService) {
    this.diary$ = diaryService.getDiary().subscribe(diary => {
      this.diary = diary;
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.diary$.unsubscribe();
  }

}
