import Vue from 'vue';

import { success, notice } from '@/utils/res';
import dayjs from 'dayjs';

declare module 'vue/types/vue' {
  interface Vue {
    to: string | object;
    $success: typeof success;
    $notice: typeof notice;
    $Date: typeof dayjs;
  }
}
