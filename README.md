## vue-editor-oss
an editor that can use v-model and upload file to oss for  vue
## Install
use npm
```
$ npm install vue-editor-oss -S
```

## documents
### v-model使用
```
<template>
  <div>
    <vue-editor-oss v-model="html"></vue-editor-oss>
  </div>
</template>
...
import VueEditorOss from '@daily/vue-editor-oss'
...
components: {
    VueEditorOss
},
data () {
    return {
        html: ''
    }
}
```

### options

参数 | 类型 | 作用 | 默认值
---|---|---|---
custom-config | Object |继承wangEditor中customConfig | { menus, onchange } 
oss-access-token |Object |上传文件到阿里云所需的配置 | 需使用者传入，必须的属性：['policy', 'accessid', 'callback', 'token', 'acl', 'signature', 'host', 'dir']

#### 具体配置如下：
customConfig与[wangEditor](https://www.kancloud.cn/wangfupeng/wangeditor3/332599) 配置一样，直传，更多配置前往此官网
```
例如：
const menus = [
  'head',  // 标题
  'bold',  // 粗体
  'fontSize',  // 字号
  'fontName',  // 字体
  'italic',  // 斜体
  'underline',  // 下划线
  'strikeThrough',  // 删除线
  'foreColor',  // 文字颜色
  'backColor',  // 背景颜色
  'link',  // 插入链接
  'list',  // 列表
  'justify',  // 对齐方式
  'quote',  // 引用
  'emoticon',  // 表情
  'image',  // 插入图片
  'table',  // 表格
  'code',  // 插入代码
  'undo',  // 撤销
  'redo'  // 重复
  ]
// 组件内默认设置了两个属性，自定义可覆盖
customConfig = {
    menus，
    onchange // 富文本编辑器内容发生变化时，需要做的处理，内部利用该方法封装好v-model
}
```
ossAccessToken： 若需要上传图片到oss，可使用此配置
```
// 需传入的参数配置为：
ossAccessToken = {
    policy: '对应oss的policy',
    accessid: '对应oss的OSSAccessKeyId',
    callback: '对应oss的callback',
    token: '对应oss的x-oss-security-token',
    acl: '对应oss的x-oss-object-acl',
    signature: '对应oss的signature',
    host: '上传到oss的域名'，
    dir: '上传到oss下的位置路径'
}，
// 如下面的例子
{
	accessid: "STS.NUvvB1XotASGYYrTwf51fPZYN"
	host: "https://daily-static.oss-cn-hangzhou.aliyuncs.com"
	token: "CAIS/gF1q6Ft5B2yfSjIr5bDPfiFtbBV9pGsW3/DsHczOb5Kv5/yrDz2IHhOenJvBOkatvU0nmtY6/YYlqJ4T55IQ1Dza8J148y5dNF2ncyT1fau5Jko1beHewHKeTOZsebWZ+LmNqC/Ht6md1HDkAJq3LL+bk/Mdle5MJqP+/	UFB5ZtKWveVzddA8pMLQZPsdITMWCrVcygKRn3mGHdfiEK00he8Tomtvnvm5fAsUuF1QSgkLQvyt6vcsT+Xa5FJ4xiVtq55utye5fa3TRYgxowr/8s0vcbpG6b5oDGWQIBvkXcKZbF89ZvIRJhYq8zF7FereTxkvt8q/xMeX5JcdKuVxqAAQdGYsSJZuHia+SU29kh7uiZii6aze/Z3lfMju0bEymExlSv8UOI+EXsI5R1fFr8QdOjxjD44VHwnJH5Gc0DBXYRMNBTlcGpTLMJWejV+ukVyVHoz/RDjIfnbfjy11nEtw5cUJsRTYdF+74wGQ6trV+yfb2ANuq6+QnODsTAj1wQ"
	acl: "public-read"
	callback:"eyJjYWxsYmFja1VybCI6Imh0dHBzOlwvXC9hcGkteWljaGUtcHJlLnNhYXN5Yy5jb21cL3lpY2hlXC9vc3NcL2NhbGxiYWNrIiwiY2FsbGJhY2tCb2R5IjoiZmlsZW5hbWU9JHtvYmplY3R9JnNpemU9JHtzaXplfSZtaW1lVHlwZT0ke21pbWVUeXBlfSZoZWlnaHQ9JHtpbWFnZUluZm8uaGVpZ2h0fSZ3aWR0aD0ke2ltYWdlSW5mby53aWR0aH0iLCJjYWxsYmFja0JvZHlUeXBlIjoiYXBwbGljYXRpb25cL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCJ9" 	policy: "eyJleHBpcmF0aW9uIjoiMjAyMC0wNC0xMVQxNDozMDoyOVoiLCJjb25kaXRpb25zIjpbWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMCwxMDQ4NTc2MDAwXSxbInN0YXJ0cy13aXRoIiwiJGtleSIsInlpY2hlXC91cGxvYWRzXC9pbWFnZVwvMjAyMDA0MTFcLyJdXX0=" 	signature: "f1bPAqupMoOPREr16Hz7t9uxl/Q=" 	dir: "uploads/image/20200411/"
}
```
