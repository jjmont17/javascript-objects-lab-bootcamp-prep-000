var recipes = { breakfast : 'eggs',
                lunch : 'turkey hero'
};

function updateObjectWithKeyAndValueValue(object, key, value)
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