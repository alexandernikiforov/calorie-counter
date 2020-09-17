import { Component, Input, OnInit } from '@angular/core';
import { DiaryService } from '../core/diary.service';
import { ConsumedFood } from '../core/diary.model';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-consumed-food-list',
  templateUrl: './consumed-food-list.component.html',
  styleUrls: ['./consumed-food-list.component.scss']
})
export class ConsumedFoodListComponent implements OnInit {
  @Input('consumedFoods')
  consumedFoods: ConsumedFood[];

  displayedColumns: string[] = ['food', 'calories'];

  selection: SelectionModel<ConsumedFood>;

  constructor(private diaryService: DiaryService) {

    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<ConsumedFood>(allowMultiSelect, initialSelection);
  }

  ngOnInit(): void {
  }

  toggleRow(row: ConsumedFood) {
    this.selection.toggle(row);
  }

  isToggled(row: ConsumedFood) {
    return this.selection.isSelected(row)
  }
}
