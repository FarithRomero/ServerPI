let myFavorites = [];

const postFav = (req, res) => {
    const character = req.body;

    myFavorites.push(character);
    return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const {id} = req.params;
  let favorites = myFavorites.filter(character => character.id !== Number(id));
  res.status(200).json(favorites)
};

module.exports = {
    postFav,
    deleteFav
};