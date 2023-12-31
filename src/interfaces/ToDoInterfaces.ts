export interface noteInterface {
  note: string;
  title: string;
}

export interface noteWithKey extends noteInterface {
  key: string;
}
