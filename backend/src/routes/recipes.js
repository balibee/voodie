const express = require('express')

const router = express.Router()

const Recipe = require('../models/recipe')

// Get all recipes in database

router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  res.send(await Recipe.find(query))
})

/* GET all recipes page. */
router.get('/', function (req, res) {
  res.render('recipes', { title: 'Recipes' })
})

// Initialize recipes
router.get('/initialize', async (req, res) => {
  // create breakfast recipe
  await Recipe.create({
    name: 'The Fluffiest Pancakes',
    ingredients: [
      '1 cup flour (125 g)',
      '2 tablespoons organic sugar',
      '1 tablespoon baking powder',
      '1/2 teaspoon salt',
      '1 cup non-dairy milk (240 mL)',
      '1 tablespoon apple cider vinegar',
      '1 teaspoon vanilla',
      'maple syrup, to serve',
    ],
    instructions: [
      'In a medium bowl, add the flour, sugar, baking powder, and salt, and stir to combine.',
      'In a medium bowl or liquid measuring cup, add almond milk, apple cider vinegar, and vanilla, and stir to combine',
      'Pour the liquid mixture into the dry mixture and whisk until smooth.',
      'Let batter rest for 5 minutes.',
      'Pour about ½ cup (65 grams) of batter onto a nonstick pan or griddle over medium heat.',
      'When the top begins to bubble, flip the pancake and cook until golden.',
      'Serve warm with maple syrup.',
    ],
    cookTime: 30,
    serves: 4,
  })

  await Recipe.create({
    name: '5-Minute Breakfast Smoothie',
    ingredients: [
      '1 cup almond milk',
      '1 ripe banana, sliced',
      '1 cup frozen fruit',
      '1 tablespoon coconut oil',
      '1-2 tablespoons chia seeds',
    ],
    instructions: [
      'Combine the almond milk, banana, frozen fruit, coconut oil, chia seeds, and powdered ginger in a blender and purée until smooth. Pour into a glass and serve immediately.',
    ],
    cookTime: 5,
    serves: 1,
  })

  // create lunch recipe
  await Recipe.create({
    name: 'Curried Tofu Wraps',
    ingredients: [
      '500g red cabbage, shredded',
      '4 heaped tbsp dairy-free yogurt (we used Alpro Plain with Coconut)',
      '3 tbsp mint sauce',
      '3 x 200g packs tofu , each cut into 15 cubes',
      '2 tbsp tandoori curry paste',
      '2 tbsp oil',
      '2 onions , sliced',
      '2 large garlic cloves , sliced',
      '8 wraps',
      '2 limes , cut into quarters',
    ],
    instructions: [
      'Mix the cabbage, yogurt and mint sauce, season and set aside.',
      'Toss the tofu with the tandoori paste and 1 tbsp of the oil. Heat a frying pan and cook the tofu, in batches, for a few mins each side until golden. Remove from the pan with a slotted spoon and set aside.',
      'Add the remaining oil to the pan, stir in the onions and garlic, and cook for 8-10 mins until softened. Return the tofu to the pan and season well.',
      'Warm the chapatis following pack instructions, then top each one with some cabbage, followed by the curried tofu and a good squeeze of lime.',
    ],
    cookTime: 25,
    serves: 4,
  })

  await Recipe.create({
    name: 'Cold Peanut Noodle Salad',
    ingredients: [
      '3 Tbsp natural-style peanut butter',
      '1 Tbsp brown sugar',
      '1 clove garlic, minced',
      '1/2 tsp grated fresh ginger',
      '1 medium lime, juiced (2 Tbsp juice)',
      '2 tsp soy sauce',
      '1/4 cup neutral oil',
      '8 oz. whole wheat spaghetti',
      '4 cups finely shredded red cabbage',
      '2 carrots',
      '1/2 bunch cilantro (about 1/2 cup chopped)',
      '4 green onions (about 1/2 cup sliced)',
      '1/2 cup peanuts, chopped $0.24',
    ],
    instructions: [
      'To make the peanut lime dressing, combine all the ingredients in a bowl or blender. Whisk or blend until smooth. Set the dressing aside.',
      'Bring a pot of water to a boil for the whole wheat spaghetti. Break the spaghetti in half to make it easier to stir into the salad ingredients later. Once the water is boiling, add the spaghetti, and continue to boil until the pasta is tender. Drain in a colander and rinse it briefly with cold water to cool it off. Let the pasta drain well.',
      'Meanwhile, shred the cabbage as finely as possible using either a knife or the shredding attachment of a food processor. Shred the carrots using a large-holed cheese grater. Roughly chop the cilantro and peanuts. Slice the green onion.',
      'Combine the cooled and well drained pasta in a large bowl with the cabbage, carrots, cilantro, green onion, and peanuts. Toss the salad until the ingredients are evenly combined.',
      'Serve the salad and peanut lime dressing immediately, or divide the undressed salad between four containers (about 2 cups each) and divide the dressing between four smaller containers (about 2 Tbsp or slightly more each). Refrigerate up to 4-5 days.',
    ],
    cookTime: 30,
    serves: 4,
  })

  // create dinner recipe
  await Recipe.create({
    name: 'Slow Cooker White Bean Soup',
    ingredients: [
      '2 Tbsp olive oil',
      '4 cloves garlic',
      '1 yellow onion ',
      '1/2 lb carrots',
      '4 ribs celery',
      '1 lb dry navy beans',
      '1 bay leaf ',
      '1 tsp dried rosemary ',
      '1/2 tsp dried thyme',
      '1/2 tsp smoked paprika',
      'Freshly cracked black pepper',
      '6 cups water',
      '2 tsp salt, or to taste',
    ],
    instructions: [
      'Mince the garlic, dice the onion, slice the celery, and peel and slice the carrots. Add the olive oil, garlic, onion, celery, and carrots to a large slow cooker.',
      'Give the beans a quick rinse in a colander and then add them to the slow cooker, along with the bay leaf, rosemary, thyme, paprika, and some freshly cracked pepper.',
      'Add six cups of water to the slow cooker and stir to combine the ingredients. Place the lid on the slow cooker and cook on low for 8-9 hours or on high for 4-5 hours.',
      'After 8 hours on low or 4 hours on high, stir the soup and begin to mash the beans against the side of the slow cooker to thicken the soup. Once the soup is thickened to your liking, start adding salt to taste. Begin with 1/2 tsp and add more until the soup tastes flavorful to you. I used about 2 tsp total.',
      'Serve the soup hot with crackers or crusty bread for dipping.',
    ],
    cookTime: 8,
    serves: 6,
  })

  await Recipe.create({
    name: 'Spinach and Artichoke Wonderpot',
    ingredients: [
      '8 oz. mushrooms',
      '1 13oz. can artichoke hearts',
      '4 cloves garlic',
      '1 yellow onion',
      '5 cups vegetable broth',
      '2 Tbsp olive oil',
      '12 oz. fettuccine',
      '1 tsp dried oregano',
      '1/2 tsp dried thyme',
      'freshly cracked black pepper',
      '4 oz. fresh or frozen spinach',
    ],
    instructions: [
      `Rinse the mushrooms to remove any dirt or debris, then slice them thinly. Drain the can of artichoke hearts and roughly chop them into bite-sized pieces. Thinly slice the onion and garlic (you can mince the garlic and dice the onion if you don't like large pieces).`,
      'Place the vegetable broth, olive oil, mushrooms, artichoke hearts, onions, and garlic in a large pot. Break the fettuccine in half and add it to the pot along with the oregano, thyme, and some freshly cracked pepper (10-15 cranks of a pepper mill). Push the ingredients down under the broth as much as possible. Place a lid on the pot and bring it up to a rolling boil over high heat.',
      'As soon as it reaches a boil, stir the pot to evenly distribute the ingredients and prevent the pasta from sticking. Turn the heat down to low so that the pot is simmering. Allow the pot to simmer, with the lid on, stirring every couple of minutes, for 10-15 minutes, or until the pasta is tender and most of the liquid has been absorbed. Make sure the broth is simmering the entire time, turning the heat up slightly, if needed, to maintain a simmer.',
      'Once the pasta is cooked through, add the spinach and stir it into the pasta, allowing the heat to wilt the spinach (if using frozen, stir until the heat has thawed the spinach).',
      'Serve the pasta hot with a pinch of crushed red pepper and some crumbled feta on top, if desired).',
    ],
    cookTime: 25,
    serves: 4,
  })

  res.send(200)
})

// Get individual recipe page
router.get('/:recipeId', async (req, res) => {
  const recipe = await Recipe.findById(req.params.recipeId)

  if (recipe) res.render('recipe', { recipe })
  else res.sendStatus(404)
})

module.exports = router
