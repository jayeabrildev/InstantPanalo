import React, {Component} from 'react';
import {ImageBackground, View, Image, StyleSheet, Animated} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class DSPlayAnimation extends Component {
  state = {
    LogoAnimate: new Animated.Value(0),
    LogoText: new Animated.Value(0),
  };

  componentDidMount() {
    const {LogoAnimate, LogoText} = this.state;
    const navigation = this.props.navigation;
    Animated.parallel([]).start(() => {
      setTimeout(() => navigation.navigate('DSPlayGame'), 2000);
    });
  }

  render() {
    return (
      <ImageBackground
        source={require('../images/bgPlayAnim.png')}
        blurRadius={1}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <Image
            style={styles.dragonlogo}
            source={require('../images/FireBurst.gif')}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default DSPlayAnimation;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dragonlogo: {
    marginTop: hp('10%'),
    height: hp('100%'),
    width: hp('100%'),
    resizeMode: 'contain',
  },
  logoText: {
    color: 'white',
    fontSize: hp('3%'),
    fontFamily: 'TitanOne-Regular',
    marginTop: hp('-10%'),
    fontWeight: '200',
  },
});
