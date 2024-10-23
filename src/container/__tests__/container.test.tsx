import {View} from 'react-native';
import {render} from '@testing-library/react-native';
import * as ContainerInjection from '../iocProvider';
import {container} from '../ioc';
import {IHttpClient} from '../../modules/shared/domain/HttpClient';

const ComponentDemo = () => {
  ContainerInjection.useInjection<IHttpClient>('IHttpClient');
  return <View></View>;
};

const ComponentDemoFail = () => {
  ContainerInjection.useInjection<IHttpClient>('IProviderNotDefined');
  return <View></View>;
};

describe('Container', () => {
  test('should render the container correctly', () => {
    render(
      <ContainerInjection.ProviderInversify container={container}>
        <ComponentDemo />
      </ContainerInjection.ProviderInversify>,
    );
  });

  test('should correctly call the method that is injected into the container', () => {
    const spyUseInjection = jest.spyOn(ContainerInjection, 'useInjection');
    render(
      <ContainerInjection.ProviderInversify container={container}>
        <ComponentDemo />
      </ContainerInjection.ProviderInversify>,
    );

    expect(spyUseInjection).toHaveBeenCalled();
    expect(spyUseInjection).toHaveBeenCalledWith('IHttpClient');
  });

  test('should return an error when calling a class that has never been injected into the container', () => {
    try {
      render(
        <ContainerInjection.ProviderInversify container={container}>
          <ComponentDemoFail />
        </ContainerInjection.ProviderInversify>,
      );
    } catch (error) {
      expect(error).toBeDefined();
      // @ts-ignore
      expect(error.message).toBe(
        'No matching bindings found for serviceIdentifier: IProviderNotDefined',
      );
    }
  });
});
