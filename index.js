const Foodie = require('./foodie')
const Recipe = require('./recipe')

const regina = new Foodie('Regina')

const bananaBread = new Recipe(
    'Banana Bread', 
    ['1 whole banana', '1 cup sugar', '2 cups flour', '1/2 cup oil', '1 cup non-dairy milk', '1 tbsp baking powder'], 
    'Mash bananas. Mix dry and wet ingredients. Bake at 180 degrees for 20 mins', 
    30, 4
)

