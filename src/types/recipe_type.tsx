export interface Recipe {
  name: string;
  rate: number;
  url: string;
  ingredients: string[];
  author: string;
  images: string[];
  steps: string[];
  description: string;
  difficulty: number;
  budget: number;
  tags: string[];
  prepTime: number;
  totalTime: number;
  people: number;
}

export interface RecipeData {
  recipes: Recipe[];
}

export interface RecipeCardProps {
  title: string;
  imageUrl: string;
  rate: number;
}
