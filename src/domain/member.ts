export interface Social {
  name: string;
  url: string;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  social: Social[];
}
