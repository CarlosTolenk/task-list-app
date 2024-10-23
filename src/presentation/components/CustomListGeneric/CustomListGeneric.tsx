import React from 'react';
import {SafeAreaView, VirtualizedList} from 'react-native';
import {ListRenderItem} from '@react-native/virtualized-lists/Lists/VirtualizedList';

interface IList {
  data: any;
  renderItem: ListRenderItem<any> | null | undefined;
  marginBottom?: number;
}

const CustomListGeneric = ({data, renderItem, marginBottom = 0}: IList) => {
  const getItem = (_data: any, index: number): any => {
    const item = _data[index];
    return {...item};
  };

  const getItemCount = (_data: unknown) => data.length;

  return (
    <SafeAreaView style={{marginBottom: marginBottom}}>
      <VirtualizedList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: any) => item?.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
};

export default CustomListGeneric;
