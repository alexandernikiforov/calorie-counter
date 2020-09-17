/**
 * Model to represent diary.
 */
export type Diary = {
  readonly date: Date;
  readonly consumedFoods: ConsumedFood[]
}

export type ConsumedFood = {
  readonly food: Food;
  readonly weightInGrams: number;
}

export interface Food {
  readonly name: string;
  readonly calories: number;
  readonly carbs: number;
  readonly protein: number;
  readonly fat: number;
  readonly unsaturatedFat: number;
}
