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
    return (
      <View style={styles.containerLoadingAndError}>
        <ActivityIndicator size="large" color="#0000ff" testID={'Loading'} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.containerLoadingAndError}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>List Screen</Text>
      {list.length > 0 ? (
        <CustomListGeneric data={list} renderItem={renderItem} />
      ) : (
        <Text>There are no items in the list</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerLoadingAndError: {
    flex: 1,
    justifyContent: 'center',
  },
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
    backgroundColor: '#535050',
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
