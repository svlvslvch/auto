type Messages = typeof import('./messages/ru.json');
declare interface IntlMessages extends Messages {}

declare module '*.svg?url' {
  const content: string;
  export default content;
}
