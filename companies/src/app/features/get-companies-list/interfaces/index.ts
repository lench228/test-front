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
