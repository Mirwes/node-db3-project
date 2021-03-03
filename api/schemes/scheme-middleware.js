const db = require('./scheme-model');

/*
  If `scheme_id` does not exist in the database:
  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = (req, res, next) => {
  db.findById(req.params.scheme_id)
  .then((results) => {
    if(results)
      next();
    else
      res.status(404).send({"message" : `scheme with scheme_id ${req.params.scheme_id} not found`});
  })
}

/*
  If `scheme_name` is missing, empty string or not a string:
  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  const scheme = req.body;
  console.log(scheme.scheme_name);
  if(!scheme.scheme_name || scheme.scheme_name === "" || typeof(scheme.scheme_name) !== "string" )
    res.status(400).send({"message":"invalid scheme_name"});
  else
    next();
}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:
  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  const step = req.body;
  if(!step.instructions || step.instructions === "" || typeof(step.instructions) !== "string" || step.step_number < 1 || typeof(step.step_number) !== "number" )
    res.status(400).send({"message":"invalid step"});
  else 
    next();
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}









































// /*
//   If `scheme_id` does not exist in the database:

//   status 404
//   {
//     "message": "scheme with scheme_id <actual id> not found"
//   }
// */
// const checkSchemeId = (req, res, next) => {

// }

// /*
//   If `scheme_name` is missing, empty string or not a string:

//   status 400
//   {
//     "message": "invalid scheme_name"
//   }
// */
// const validateScheme = (req, res, next) => {

// }

// /*
//   If `instructions` is missing, empty string or not a string, or
//   if `step_number` is not a number or is smaller than one:

//   status 400
//   {
//     "message": "invalid step"
//   }
// */
// const validateStep = (req, res, next) => {

// }

// module.exports = {
//   checkSchemeId,
//   validateScheme,
//   validateStep,
// }
