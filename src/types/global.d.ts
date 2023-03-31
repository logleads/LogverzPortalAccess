declare module '*.vue' {
  import Vue from 'vue';
  // noinspection JSUnusedGlobalSymbols
  export default Vue;
}

declare type Nullable<T> = T | null;

declare type AnyFunction = (...args: any[]) => any;
