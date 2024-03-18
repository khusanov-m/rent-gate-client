export type PagingConfig = {
  count: number;
  pagination: { total_items: number; total_pages: number };
};

export type MessageResponse = {
  message: string;
  status: string;
};