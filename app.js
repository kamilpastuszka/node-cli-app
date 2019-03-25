"use strict";

const { Select } = require("enquirer");
const data = require("./countries");

const prompt = new Select({
  message: "Which country do you want to see capitol for?",
  choices: data.map(c => c.Country),
  limit: data.map(c => c.Country).length
});

const findCapitol = (values, country) => {
  return values.find(item => item.Country === country).Capitol;
};

prompt
  .run()
  .then(answer => {
    const capitol = findCapitol(data, answer);
    console.log("Capitol:", capitol);
  })
  .catch(console.error);
