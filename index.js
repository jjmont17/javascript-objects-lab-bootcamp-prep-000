var recipes = { breakfast : 'eggs',
                lunch : 'turkey hero'
};

function destructivelyUpdateObjectWithKeyAndValueValue(recipes, key, value)
{
  var newRecipes = Object.assign({}, recipes)
  newRecipes[key] = value;
  return newRecipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value)
{
  recipes[key] = value

  return recipes
}