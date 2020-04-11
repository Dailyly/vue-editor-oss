<template>
  <div class="vue-editor-oss" ref="vue-editor-oss">
  </div>
</template>

<script>
import Editor from 'wangeditor'
import { ossUpload } from './oss'

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
export default {
  name: 'VueEditorOss',
  model: {
    prop: 'html',
    event: 'onchange'
  },
  props: {
    html: String,
    ossAccessToken: Object,
    customConfig: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      $editor: null
    }
  },
  computed: {
    value: {
      get () {
        return this.html
      },
      set (val) {
        this.emitHtml(val)
      }
    },
    ossAccess () {
      return this.ossAccessToken
      // return Object.assign({}, (this.ossAccessToken))
    },
    defaultEditorOpts () {
      // console.log({...{a:1}})
      return {
        menus,
        ...this.ossAccess && Object.keys(this.ossAccess).length ? { customUploadImg: this.uploadFile } : {},
        onchange: this.handleHtmlChange
      }
    },
    editorOptions () {
      return Object.assign({}, this.defaultEditorOpts, this.customConfig)
    }
  },
  mounted () {
    this.initEditor()
  },
  beforeDestroy () {
    this.$editor && this.$editor.txt.clear()
  },
  watch: {
    html (val) {
      val && this.$nextTick(() => {
        this.$editor.txt.html(val)
      })
    }
  },
  methods: {
    initEditor () {
      this.$editor = new Editor(this.$refs['vue-editor-oss'])
      this.$editor.customConfig = this.editorOptions
      this.$editor.create()
    },
    async uploadFile (file, insert) {
      const res = await ossUpload(this.ossAccess, file[0])
      insert(res.url)
    },
    handleHtmlChange (html) {
      this.value = html
    },
    /* events */
    emitHtml (newVal) {
      this.$emit('onchange', newVal)
    }
  }
}
</script>