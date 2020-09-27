import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
   recepies: Recipe[] = [
     new Recipe('A Test Recipe','it is a nonsence', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Fdish-food-cuisine-ingredient-produce-recipe-meat-vegetarian-food-comfort-food-side-dish-bento-Yong-tau-foo-meal-salad-teriyaki-chinese-food-japanese-cuisine-donburi-1575227.jpg&imgrefurl=https%3A%2F%2Fpxhere.com%2Fen%2Fphoto%2F1575227&tbnid=9aJA2-y0U_QLOM&vet=12ahUKEwium_SfrILsAhXJFLcAHavxC8YQMygsegUIARDtAg..i&docid=DSUD40C57NKjrM&w=6362&h=4241&q=images%20of%20recipe&hl=en&ved=2ahUKEwium_SfrILsAhXJFLcAHavxC8YQMygsegUIARDtAg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
