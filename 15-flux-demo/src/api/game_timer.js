import GameActions from '../flux/actions/game';
import UserActions from '../flux/actions/user';

export default {
  start: function() {
    setInterval(function() {
      GameActions.shuffle();
      UserActions.setRandomNumber();
    }, 500);
  }
};

