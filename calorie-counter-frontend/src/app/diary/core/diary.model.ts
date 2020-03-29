/**
 * Model to represent diary.
 */
export class Diary {
  date: Date;
  consumedFoods: ConsumedFood[]
}

export class ConsumedFood {
  food: Food;
  weightInGrams: number;
}

export class Food {
  name: string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
}
