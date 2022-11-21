export type stats = {
  route: string;
  quantity: number;
  description: string;
};

export type roundedThumnail = {
  gradient: boolean;
  imgUrl: string;
  imgAlt: string;
  boxSize?: string;
};

export type navigationIconData = {
  idClass: string;
  title: string;
  Icon: JSX.Element;
  setFocus: React.Dispatch<string>;
  focus: string;
};
