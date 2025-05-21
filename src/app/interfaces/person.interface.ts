export interface Person {
  name: string | number;
  age: number;
  position?: string; // durch das ? wird für position auch undefined erlaubt
}