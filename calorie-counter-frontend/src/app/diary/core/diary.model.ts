/**
 * Model to represent diary.
 */
export interface Diary {
  date: Date;
  consumedFoods: ConsumedFood[]
}

export interface ConsumedFood {
  food: Food;
  weightInGrams: number;
}

export interface Food {
  name: string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
}
