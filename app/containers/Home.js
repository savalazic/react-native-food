import React, { Component } from 'react';
import { 
  View, 
  Text,
  TouchableHighlight,
  Image,
  TextInput,
  ScrollView,
  StyleSheet 
} from 'react-native';

import { connect } from 'react-redux';

class Home extends Component {

  constructor(props) {
    super(props);
    this.searchPressed = this.searchPressed.bind(this);
  }

  searchPressed() {
    this.props.fetchRecipes('bacon,cucumber,banana');
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableHighlight onPress={this.searchPressed}>
            <Text>Fetch Recepies</Text>
          </TouchableHighlight>
          
        </View>
        <ScrollView>
          <Text>Home</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function mapStateToProps(state) {
  return {
    searchedRecepies: state.searchedRecepies
  };
}

export default connect(mapStateToProps)(Home);
