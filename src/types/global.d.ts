declare module '*.vue' {
  import { ComputedRef, defineComponent } from 'vue';

  // Define the type for the computed property object
  type ComputedPropertyObject<T> = {
    [key: string]: ComputedRef<T>;
  };

  // Define the component type including the computed property
  type VueComponent = ReturnType<typeof defineComponent> & {
    computed?: ComputedPropertyObject<any>; // Adjust the type here
  };

  // Export the component type as the default export of the module
  const component: VueComponent;
  export default component;
}

declare type Nullable<T> = T | null;

declare type AnyFunction = (...args: any[]) => any;
