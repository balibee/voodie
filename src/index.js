const Foodie = require('./foodie')
const Recipe = require('./recipe')

const regina = new Foodie('Regina')
const jill = new Foodie('Jill')

const bananaBread = new Recipe(
  'Banana Bread',
  ['1 whole banana', '1 cup sugar', '2 cups flour', '1/2 cup oil', '1 cup non-dairy milk', '1 tbsp baking powder'],
  'Mash bananas. Mix dry and wet ingredients. Bake at 180 degrees for 20 mins',
  30,
  4
)

const berrySmoothie = new Recipe(
  'Mixed Berry Smoothie',
  ['1 cup mixed berries', '2 cups non-dairy milk', '1 banana'],
  'Blend until smooth',
  5,
  2
)

regina.createRecipe(bananaBread)
regina.createRecipe(berrySmoothie)

jill.follow(regina)
jill.rateRecipe(bananaBread, 5, 'yum')
regina.rateRecipe(bananaBread, 4, 'good')
console.log(bananaBread.rating)
