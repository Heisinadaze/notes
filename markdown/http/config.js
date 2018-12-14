
const argv = require('yargs').argv;

exports.MONGODB = {
  uri: `mongodb://jsaq:8023@127.0.0.1:${argv.dbport || '1994'}/mydb`
}

exports.AUTH = {
	jwtTokenSecret: argv.auth_key || 'mydb',
	defaultUsername: argv.auth_default_username || '',
	defaultPassword: argv.auth_default_password || ''
}

exports.QINIU = {
	accessKey: argv.qn_accessKey || 'fAbj02mG82EtznQY-ZmovwmEZcL8cC740_Onp6Mz',
	secretKey: argv.qn_secretKey || 'Icmz8EDe-2jNk09OCao-U3bA2Tq_6zCagLFzv0pR',
	bucket: argv.qn_bucket || 'qiniu',
	origin: argv.qn_origin || 'http://p5bqqz56i.bkt.clouddn.com',
	uploadURL: argv.qn_uploadURL || 'http://up.qiniup.com/'
}

exports.APP = {
  ROOT_PATH: '/api',
  LIMIT: 16,
  PORT: 8000
}

exports.INFO = {
  name: 'jsan',
  version: '1.0.0',
  author: '12',
  site: 'http://jsan.top'
}

exports.EMAIL = {
  service: 'smtp.qq.com',
  user: '1398210469@qq.com',
  pass: 'yepysltxxdcrfeab',
  recipient: '18410079323@163.com'
}

// 同级 key pem
