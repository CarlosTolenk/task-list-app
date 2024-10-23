import {Container, interfaces} from 'inversify';
import {getBindingDictionary} from 'inversify/lib/planning/planner';

// Modules
import {moduleShared} from '../modules/shared/module';
import {moduleAuth} from '../modules/auth/module';

function copyDictionary(
  origin: interfaces.Lookup<interfaces.Binding<any>>,
  destination: interfaces.Lookup<interfaces.Binding<any>>,
) {
  origin.traverse((key, value) => {
    value.forEach(binding => {
      destination.add(binding.serviceIdentifier, binding.clone());
    });
  });
}

function merge(
  container1: interfaces.Container,
  container2: interfaces.Container,
  ...container3: interfaces.Container[]
): interfaces.Container {
  const container = new Container();
  const targetContainers: interfaces.Lookup<interfaces.Binding<any>>[] = [
    container1,
    container2,
    ...container3,
  ].map(targetContainer => getBindingDictionary(targetContainer));
  const bindingDictionary: interfaces.Lookup<interfaces.Binding<any>> =
    getBindingDictionary(container);

  targetContainers.forEach(targetBindingDictionary => {
    copyDictionary(targetBindingDictionary, bindingDictionary);
  });

  return container;
}

export const container = merge(moduleShared, moduleAuth);
