import { Ingredient } from "src/app/root/shared/ingredients.model";

export class Receipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, image: string, ingredients: Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = image;
        this.ingredients = ingredients;
    }
}