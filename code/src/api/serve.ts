import ax from './axios';

export function concat (params: any): Promise<Ajax.AjaxResponse> {
  return ax
    .get('/', { params })
    .then((res: any) => res.data)
    .catch((e: any) => console.error(e));
}
