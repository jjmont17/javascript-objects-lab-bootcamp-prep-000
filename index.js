var recipes = { breakfast : 'eggs',
                lunch : 'turkey hero'
};

function updateObjectWithKeyValue(recipes, key, value)
{
  var newRecipes = Object.assign({}, recipes)
  newRecipes[key] = value;
  return newRecipes
}
