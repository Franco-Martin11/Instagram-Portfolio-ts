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

export type Image = {
  id: string;
  imgAlt: string;
  imgUrl: string;
  slides?: Array<{ id: string; imgAlt: string; imgUrl: string }>;
};

export type publishData = Array<Image>;
