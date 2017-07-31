import React, { Component } from 'react';
import { 
  View, 
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../actions';

class AppContainer extends Component {

  constructor(props) {
    super(props);
    this.addRecipe = this.addRecipe.bind(this);
  }

  addRecipe() {
    this.props.addRecipe()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>AppContainer</Text>
        <Text>Recipe Count: {this.props.recipeCount}</Text>
        <TouchableHighlight onPress={this.addRecipe}>
          <Text>Add Recipe</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function mapStateToProps(state) {
  return {
    recipeCount: state.recipeCount
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

