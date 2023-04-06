export interface OptionProps {
  label: any;
  value: any;
}

export interface GeneralProps {
  name?: string;
  value?: any;
  onChange2?: any;
  onChangeRHF?: any;
}

export interface Paged {
  page_no: number;
  page_size: number;
  rowCount: number;
  pageCount: number;
}

export interface pageFiltertype extends Paged {
  search_text: string,
  sortBy: any[]
}


export interface UserLogin {
  username: string,
  password: string
}