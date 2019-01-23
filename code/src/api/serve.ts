import axios from './axios';

export function concat (params: any): Promise<Ajax.AjaxResponse> {
  return axios
    .get('/', { params })
    .then((res: any) => res.data)
    .catch((e: any) => console.error(e));
}

export function user (params: any): Promise<Ajax.AjaxResponse> {
  return axios
    .get('/user', { params })
    .then((res: any) => res.data)
    .catch((err: any) => console.error(err));
}

export function getBill (params: any) {
  return axios.get('/getBill', { params })
        .then(res => res.data)
        .catch((err: any) => console.error(err));
}
export function addBill (params: any) {
  return axios.post('/addBill', params)
        .then(res => res.data)
        .catch((err: any) => console.error(err));
}
export function delBill (params: any) {
  return axios.post('/delBill', params)
        .then(res => res.data)
        .catch((err: any) => console.error(err));
}

export function getLog (params: any) {
  return axios.get('/getLog', { params })
        .then(res => res.data)
        .catch((err: any) => console.error(err));
}
export function addLog (params: any) {
  return axios.post('/addLog', params)
        .then(res => res.data)
        .catch((err: any) => console.error(err));
}
export function delLog (params: any) {
  return axios.post('/delLog', params)
        .then(res => res.data)
        .catch((err: any) => console.error(err));
}

export function getArtList (params: any) {
  return axios.get('/getArtList', { params })
              .then(res => res.data)
              .catch((err: any) => console.error(err));
}

export function getLabel (params: any) {
  return axios.get('/getLabel', { params })
              .then(res => res.data)
              .catch((err: any) => console.error(err));
}
