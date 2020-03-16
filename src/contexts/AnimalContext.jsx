import React from "react";

const initialState = {
  animals: [{
    name: "Fluffy Jenkins",
    birthday: {
      age: 3,
      duration: "years"
    },
    favoriteActivity: "Eating",
    petPeave: "Hairballs",
    analytics: {
      personalities: [{
        name: 'Curious',
        value: 78
      }, {
        name: 'Friendly',
        value: 44
      }, {
        name: 'Energetic',
        value: 55
      }],
      activities: [{
        name: 'Meowing',
        y: 25,
        sliced: true,
        selected: true
      }, {
        name: 'Hunting',
        y: 7,
      }, {
        name: 'Sleeping',
        y: 55,
      }, {
        name: 'Eating',
        y: 13,
      }]
    }
  }, {
    name: "Birdie",
    birthday: {
      age: 5,
      duration: "years"
    },
    favoriteActivity: "Sleeping",
    petPeave: "Loud noises"
  }, {
    name: "Tuna",
    birthday: {
      age: 6,
      duration: "months"
    },
    favoriteActivity: "Playing",
    petPeave: "None"
  }, {
    name: "Clawdia",
    birthday: {
      age: 1,
      duration: "year"
    },
    favoriteActivity: "Staring",
    petPeave: "Hairballs"
  }, {
    name: "Catzilla",
    birthday: {
      age: 1,
      duration: "year"
    },
    favoriteActivity: "Meowing",
    petPeave: "No one listening"
  }, {
    name: "Fluffy Jenkins",
    birthday: {
      age: 3,
      duration: "years"
    },
    favoriteActivity: "Eating",
    petPeave: "Hairballs"
  }, {
    name: "Birdie",
    birthday: {
      age: 5,
      duration: "years"
    },
    favoriteActivity: "Sleeping",
    petPeave: "Loud noises"
  }, {
    name: "Tuna",
    birthday: {
      age: 6,
      duration: "months"
    },
    favoriteActivity: "Playing",
    petPeave: "None"
  }, {
    name: "Clawdia",
    birthday: {
      age: 1,
      duration: "year"
    },
    favoriteActivity: "Staring",
    petPeave: "Hairballs"
  }, {
    name: "Catzilla",
    birthday: {
      age: 1,
      duration: "year"
    },
    favoriteActivity: "Meowing",
    petPeave: "No one listening"
  }, {
    name: "Fluffy Jenkins",
    birthday: {
      age: 3,
      duration: "years"
    },
    favoriteActivity: "Eating",
    petPeave: "Hairballs"
  }, {
    name: "Birdie",
    birthday: {
      age: 5,
      duration: "years"
    },
    favoriteActivity: "Sleeping",
    petPeave: "Loud noises"
  }, {
    name: "Tuna",
    birthday: {
      age: 6,
      duration: "months"
    },
    favoriteActivity: "Playing",
    petPeave: "None"
  }, {
    name: "Clawdia",
    birthday: {
      age: 1,
      duration: "year"
    },
    favoriteActivity: "Staring",
    petPeave: "Hairballs"
  }, {
    name: "Catzilla",
    birthday: {
      age: 1,
      duration: "year"
    },
    favoriteActivity: "Meowing",
    petPeave: "No one listening"
  }]
};

const AnimalContext = React.createContext(initialState);
const AnimalProvider = AnimalContext.Provider;
const AnimalConsumer = AnimalContext.Consumer;

export {AnimalContext, AnimalConsumer, AnimalProvider};
