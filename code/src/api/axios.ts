import axios from 'axios';
import querystring from 'querystring';
import { error } from '@/utils/res';
import router from '@/router/router';

const ax = axios.create({
  baseURL: '/api'
});

// 拦截器
ax.interceptors.request.use(
  (config: any) => {
    if (
      config.method === 'post' ||
      config.method === 'put' ||
      config.method === 'delete' ||
      config.method === 'patch'
    ) {
      config.data = querystring.stringify(config.data.site);
    }
    return config;
  },
  (error: string) => {
    return Promise.reject(error);
  }
);

ax.interceptors.response.use(
  (response: any) => {
    if (response.data.code === 43) router.push('/login');
    else if (response.data.name === 'jsan') console.log(response.data);
    else if (response.data.code !== 1) error(response.data.message || '请求失败');
    return response;
  },
  (error: any) => {
    // ...
  }
);

export default ax;
