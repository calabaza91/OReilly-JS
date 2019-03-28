'use strict';
//use npm underscore
const _ = require('underscore');

const sentences = [
  {subject:'JavaScript', verb:'is', object:'great'},
  {subject:'Elephants', verb:'are', object:'large'}
];

//Removed for the use of underscore
/*es6 feature: object destructuring
function say({subject, verb, object}){


es6 feature: template strings
note that quotes below are backticks (`), not single quotes (')
  console.log(`${subject} ${verb} ${object}`);*/


//Pluck gets the verb out of the sentences
const verbs = _.pluck(sentences, 'verb');
//es6 feature: for..of
for (let verb of verbs) {
  console.log(`found verb: ${verb}`)

  //say(s);
}
