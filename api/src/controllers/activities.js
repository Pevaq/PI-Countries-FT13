const { Country, Activity } = require("../db");

async function newAct(req, res) {
  const { name, difficulty, duration, season, countryID } = req.body;

  const valdidateact = await Activity.findOne({
    where: {
      name: name,
    },
  });

  if (!valdidateact) {
    const addAct = await Activity.create({
      name: name,
      difficulty: difficulty,
      duration: duration,
      season: season,
    });
    const countrymatch = await Country.findAll({
      where: {
        id: countryID,
      },
    });

    const resact = await addAct.addCountries(countrymatch);

    return res.send(resact);
  }

  const countrymatch = await Country.findAll({
    where: {
      id: countryID,
    },
  });
  // console.log(addAct)
  // console.log(countrymatch)

  const resact = await valdidateact.addCountries(countrymatch);

  res.send(resact);
}

module.exports = { newAct };
