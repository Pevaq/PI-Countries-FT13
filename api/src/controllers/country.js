const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const { Country, Activity } = require("../db");

async function getAllCount(req, res) {
  const { name } = req.query;

  try {
    if (!name) {
      const countryAll = await Country.findAll({ include: Activity});
      res.send(countryAll);
    } else {
      const countryQuery = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`
          },
        },
         include: Activity
      });

      if (!countryQuery[0]) {
        console.log("error");

        return res
          .status(404)
          .json({
            error: ` no se encuentra ningun Pais con el nombre , ${name}`,
          });
      }
      return res.send(countryQuery);
    }
  } catch (error) {
    res.send(error);
  }
}

async function GetCountryId(req, res) {
  try {
    const idpais = req.params.idPais.toUpperCase();
    // console.log(idpais)
    const country = await Country.findOne({
      where: {
        id: idpais,
      },
      include: Activity,
    });

    return res.json(country);
  } catch (error) {
    res.send(error);
  }
}

module.exports = { getAllCount, GetCountryId };
