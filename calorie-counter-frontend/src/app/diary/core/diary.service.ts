import { Injectable } from '@angular/core';
import { ConsumedFood, Diary, Food } from './diary.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  private today: Diary = {
    date: new Date(),
    consumedFoods: DiaryService.generateConsumption()
  };

  private _diary$ = of(this.today);

  constructor() {
  }

  private static generateConsumption(): ConsumedFood[] {
    const porridge: Food = {
      name: 'Овсянка',
      calories: 356,
      carbs: 50,
      fat: 12,
      unsaturatedFat: 10,
      protein: 12
    };

    return Array.from({length: 50}, () => {
      return {
        weightInGrams: 50,
        food: porridge
      }
    });
  }

  public getDiary(): Observable<Diary> {
    return this._diary$;
  }
}
