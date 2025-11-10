export interface iCompany {
  id: number;
  uid: string;
  business_name: string;
  suffix: string;
  industry: string;
  type: string;
  catch_phrase: string;
  phone_number: string;
  full_address: string;
  latitude: number;
  longitude: number;
  logo: string;
}

export interface iCompaniesResponse {
  data: iCompany[];
  page: number;
  per_page: number;
  total_pages: number;
  offset: number;
  limit: number;
  total: number;
  has_prev: boolean;
  has_next: boolean;
}

export type SortingOrder = 'asc' | 'desc';
export type SortBy = 'id' | 'name' | 'type' | 'industry';

export interface iSortModel {
  sort_by?: SortBy;
  sort_order: SortingOrder;
}
export interface iFilterModel {
  query?: string | null;
  industry?: string | null;
  company_type?: string | null;
}

export interface iCompaniesRequest extends Omit<iFilterModel, 'query'>, iSortModel {
  q?: iFilterModel['query'];
}
