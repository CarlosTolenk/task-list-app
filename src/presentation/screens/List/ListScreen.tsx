import {StyleSheet, Text, View, ActivityIndicator, Image} from 'react-native';

// Components
import CustomListGeneric from '../../components/CustomListGeneric/CustomListGeneric';

// Domain
import {List} from '../../../modules/list/domain/List';

// ViewModel
import {useListViewModel} from './ListViewModel';

const ListScreen = () => {
  const {list = [], loading, error} = useListViewModel();

  const renderItem = ({item}: {item: List}) => {
    if (!item) return null;

    return (
      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <Image source={{uri: item.avatar}} style={styles.itemImage} />
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View style={styles.separator} />
      </View>
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>List Screen</Text>
      <CustomListGeneric data={list} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: '#fff',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: '#f9f9f9',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#000',
    marginTop: 8,
  },
});

export default ListScreen;
