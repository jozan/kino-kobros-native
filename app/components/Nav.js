import React, { Component, Navigator } from 'react-native';

export default class Nav extends Component {

  renderScene(route, navigator) {
    const Scene = route.component;
    const { component, ...props } = route;

    return (
      <Scene route={route} navigator={navigator} {...props} />
    );
  }

  render() {
    return (
      <Navigator
        {...this.props}
        renderScene={this.renderScene}
        configureScene={route => (
          route.sceneConfig || Navigator.SceneConfigs.FloatFromRight
        )}
      />
    );
  }
}
