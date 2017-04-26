import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import ExerciseApp from './containers/ExerciseApp';
import Splash from './components/exercises/Splash';

// router demonstration
const reducer = combineReducers(reducers);
const store = createStore(reducer);

const BasicLayout = (props) => (
  <View style={{ flex: 1 }}>
    {props.children}
  </View>
)

class RouterStory extends React.Component {
  componentDidMount() {
    setTimeout(function () {
      Actions.exercise();
    }, 3000);
  }

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar duration={0}>
          <Scene key="splash" component={Splash} />
          <Scene key="exercise" component={ExerciseApp} />
        </Scene>
      </Router>
    );
  }
}

const App = () => (
  <Provider store={store}>
    <RouterStory />
  </Provider>
);

export default App;
