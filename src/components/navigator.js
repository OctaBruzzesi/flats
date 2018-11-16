import { createStackNavigator } from 'react-navigation';
import FlatsList from './FlatsList';
import Hire from './Hire';

export default createStackNavigator(
  {
    FlatsList,
    Hire
  },
  {
    initialRoutName: 'FlatList',
    navigationOptions: {
      title: 'Flats, flats!'
    }
  }
);
