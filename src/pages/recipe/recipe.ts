import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
/**
 * Generated class for the RecipePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
  animations: [
    trigger('listAnim', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger(100, [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateX(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
          ]))]), { optional: true }),
        query(':leave', stagger(100, [
          animate('1s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateX(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateX(-75%)', offset: 1.0 }),
          ]))]), { optional: true }),
      ])
    ]),
    trigger('thumbAnim', [
      transition('* => fadeIn', [
        animate('500ms ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition('* => fadeOut', [
        animate('500ms ease', style({ opacity: 0, transform: 'translateY(-50px)' }))
      ])
    ]),
    trigger('titleAnim', [
      transition('* => fadeIn', [
        animate('750ms ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition('* => fadeOut', [
        animate('750ms ease', style({ opacity: 0, transform: 'translateY(-50px)' }))
      ])
    ])
  ]
})
export class RecipePage {

  recipe: any = {
    name: 'ROMANESCO RISOTTO',
    liked: false,
    thumb: 'assets/images/ingredients.png',
    ingredients: [
      '300g Thinly sliced romanesco ',
      '30 ml Extra-virgin olive oil ',
      '16 Medium peeled shrimp ',
      '2 Garlic cloves, thinly sliced ',
      '150g Treviso leaves, torn '
    ],
    steps: [
      {
        step: 1,
        title: 'Make Sauce',
        desc: [
          'Make the vinaigrette.',
          'In a bowl whisk together the shiro dashi and yuzu.',
          'Slowly whisk in the olive oil.',
          'Season to taste with blackpepper.'
        ]
      },
      {
        step: 2,
        title: 'Cook Rice',
        desc: [
          'Heat the oil in a large skillet over medium-high heat.',
          'Add the roman and cook.',
          'Stirring frequently until caramelized, about 2 to minutes'
        ]
      },
      {
        step: 3,
        title: 'Make Sauce',
        desc: [
          'Make the vinaigrette.',
          'In a bowl whisk together the shiro dashi and yuzu.',
          'Slowly whisk in the olive oil.',
          'Season to taste with blackpepper.'
        ]
      },
      {
        step: 4,
        title: 'Cook Rice',
        desc: [
          'Heat the oil in a large skillet over medium-high heat.',
          'Add the roman and cook.',
          'Stirring frequently until caramelized, about 2 to minutes'
        ]
      },
    ]
  };
  curStep: number = 0;
  description: any = [];
  title: string = 'ingredients';
  showThumb: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.description = this.recipe.ingredients;
    this.thumbState = 'fadeIn';
    this.titleState = 'fadeIn';
  }

  public get heartIcon(): string {
    return this.recipe.liked ? 'heart' : 'heart-outline';
  }

  public get heartIconColor(): string {
    return this.recipe.liked ? 'like' : 'light-grey';
  }

  public get stepTitle(): string {
    let curStepTitle: string;
    let isFinash = this.curStep >= this.recipe.steps.length;
    if (isFinash) {
      curStepTitle = 'Finash Cook ~';
    } else {
      curStepTitle = `Step${this.recipe.steps[this.curStep].step}: ${this.recipe.steps[this.curStep].title}`;
    }
    return curStepTitle;
  }

  onLike() {
    this.recipe.liked = !this.recipe.liked;
  }

  goBack() {
    this.navCtrl.pop();
  }

  thumbState: string = 'fadeOut';
  titleState: string = 'fadeOut';

  animateMe() {
    if (this.curStep >= this.recipe.steps.length) return;
    this.curStep += 1;
    this.description = [];
    this.thumbState = 'fadeOut';
    this.titleState = 'fadeOut';
    setTimeout(() => {
      this.thumbState = 'fadeIn';
      this.recipe.thumb = this.recipe.thumb != 'assets/images/recipe.png' ? 'assets/images/recipe.png' : 'assets/images/ingredients.png';
    }, 500);
    setTimeout(() => {
      this.titleState = 'fadeIn';
      this.title = 'Step' + this.curStep;
    }, 750);
    setTimeout(() => {
      let step = this.recipe.steps.find(x => x.step === this.curStep);
      this.description.push(...step.desc);
    }, 1000);
  }

}
