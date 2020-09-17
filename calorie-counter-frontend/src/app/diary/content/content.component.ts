import { Component, OnInit } from '@angular/core';
import { DiaryService } from '../core/diary.service';
import { Observable } from 'rxjs';
import { ConsumedFood, Diary } from '../core/diary.model';
import { map } from 'rxjs/operators';

/**
 * Smart component.
 */
@Component({
  selector: 'app-diary-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  diary$: Observable<Diary>;
  consumedFoods$: Observable<ConsumedFood[]>;

  constructor(private diaryService: DiaryService) {
    this.diary$ = diaryService.getDiary();
    this.consumedFoods$ = this.diary$.pipe(map(diary => diary.consumedFoods));
  }

  ngOnInit(): void {
  }

}
