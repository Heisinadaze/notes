import { Notification, Message } from 'element-ui';

function error (message: string) {
  if (document.body.clientWidth && document.body.clientWidth < 754) {
    Message.error(message);
  } else {
    Notification.error({
      title: '错误',
      message
    });
  }
}

function success (message: string) {
  if (document.body.clientWidth && document.body.clientWidth < 754) {
    Message.success(message);
  } else {
    Notification.success({
      title: '成功',
      duration: 2000,
      message
    });
  }
}

function notice (message: string) {
  if (document.body.clientWidth && document.body.clientWidth < 754) {
    Message.warning(message);
  } else {
    Notification.warning({
      title: '提示',
      duration: 2000,
      message
    });
  }
}

export {
  notice,
  success,
  error
};
