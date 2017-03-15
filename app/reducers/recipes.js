// @flow
import { SAVE_RECIPE, SAVE_RECIPE_FAIL, SAVE_RECIPE_SUCCESS } from '../actions/recipes';

export type settingsStateType = {
  userMessageShown: boolean,
  recipe: Object
};

type actionType = {
  type: string,
  payload: any
};

// https://forum.braumeisters.net/viewtopic.php?f=11&t=1418&start=30

// send recipe:
// curl -X POST -d @test.txt http://IP_OF_YOUR_BRAUMEISTER/rz.txt --header "Content-Type: application/x-www-form-urlencoded; charset=UTF-8"
// test.txt contains:

// rz=1X53X53X10X66X75X73X10X78X10X0X0X90X102X60X45X30X15X5X2.Name of the Beer

// 1X53 = Mash in temperature 1= index of recipe (index starts from 0)
// X53X10 = 1 st step (10 min@53°C)
// X66X75 = 2nd step (75 min@66°C )
// X73X10 = 3rd step (10 min@73°C)
// X78X10 = 4th step (10 min@78°C)
// X0X0 = 5th step (not used)
// X90X102 = boiling time and temperature (90 min @ 102°C)
// X60 (hop 1 @ 60min)
// X45 (hop 2 @ 45min)
// X30 (hop 3 @ 30min)
// X15 (hop 4 @ 15min)
// X5 (hop 5 @ 5min)
// X2 (hop 6 @ 2min)
// .Name of the Beer

const defaultState = {
  userMessageShown: false,
  recipe: {
    name: '',
    index: 0,
    mashIn: 0,
    rest0Duration: 0,
    rest0Temperature: 0,
    rest1Duration: 0,
    rest1Temperature: 0,
    rest2Duration: 0,
    rest2Temperature: 0,
    rest3Duration: 0,
    rest3Temperature: 0,
    rest4Duration: 0,
    rest4Temperature: 0,
    boilDuration: 0,
    boilTemperature: 0,
    hop0: 0,
    hop1: 0,
    hop2: 0,
    hop3: 0,
    hop4: 0,
    hop5: 0
  }
};

export default function settings(state: settingsStateType = defaultState, action: actionType) {
  switch (action.type) {
    case SAVE_RECIPE:
      return {
        ...state,
        recipe: action.payload
      };

    case SAVE_RECIPE_SUCCESS:
    case SAVE_RECIPE_FAIL:
      return {
        ...state,
        userMessageShown: true
      };

    default:
      return state;
  }
}
