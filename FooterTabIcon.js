import React, { Fragment, Component } from 'react';
import { AppRegistry, StyleSheet, View, AsyncStorage, ImageBackground, Text } from 'react-native';
import styles from '../styles/styles.js';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import flatListData2 from '../data/flatListData2';
import favoriteListData from '../data/favoriteListData';
export default class FooterTabIcon extends Component {

	render() {
		const { navigation } = this.props;
		return (
				<Footer>
					<FooterTab>
						<Button onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Recipe')}>
              <Icon name="create" />
              <Text>My Recipes</Text>
            </Button>
            {/* <Button>
							<Icon name="search" />
              <Text>Search</Text>
            </Button> */}
            <Button onPress={() => this.props.navigation.navigate('Settings')}>
              <Icon name="settings" />
              <Text>Settings</Text>
            </Button>
					</FooterTab>
				</Footer>
    );
	}


	


}
