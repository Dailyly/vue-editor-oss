import md5 from 'md5'
import axios from 'axios'

const keyRenameMap = {
  policy: 'policy',
  accessid: 'OSSAccessKeyId',
  callback: 'callback',
  token: 'x-oss-security-token',
  acl: 'x-oss-object-acl',
  signature: 'signature'
}

function getNewFileName (fileName) {
  const fileInfo = fileName.split('.')
  const fileEx = fileInfo.length >= 2 ? fileInfo.pop() : ''
  const md5Fid = md5(fileName + new Date() + Math.random())
  return `${md5Fid}.${fileEx}`
}

export function ossUpload (ossAccessToken, file) {
  return new Promise((resolve, reject) => {
    prepareUpload(ossAccessToken, file, resolve, reject)
  })
}

function prepareUpload (ossAccessToken, file, resolve, reject) {
  const { host, dir } = ossAccessToken
  const formData = new FormData()
  formData.append('key', `${dir}${getNewFileName(file.name)}`)
  Object.keys(keyRenameMap).forEach(key => {
    formData.append(keyRenameMap[key], ossAccessToken[key])
  })
  formData.append('success_action_status', 200)
  formData.append('file', file)
  axios.post(host, formData).then(result => {
    if (result.status !== 200) {
      reject(new Error(result.statusText))
      return
    }
    resolve(result.data.result)
  })
}
