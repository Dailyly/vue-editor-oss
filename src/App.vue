<template>
  <div>
    <vue-editor-oss v-model="html" :ossAccessToken="policy"></vue-editor-oss>
  </div>
</template>

<script>
  import VueEditorOss from './components/VueEditorOss.vue'
  export default {
    components: {
      VueEditorOss
    },
    data () {
      return {
        html: '',
        policy: {
		"accessid": "STS.NTrZY4Sjp1DmEvCT3Ms1gzc2h",
		"host": "https://yiche-static.oss-cn-hangzhou.aliyuncs.com",
		"token": "CAIS/gF1q6Ft5B2yfSjIr5fHEeOAvrVRhoaGR1DysDMYf75LlaaZijz2IHhOenJvBOkatvU0nmtY6/YYlqJ4T55IQ1Dza8J148zvWfpyncyT1fau5Jko1beHewHKeTOZsebWZ+LmNqC/Ht6md1HDkAJq3LL+bk/Mdle5MJqP+/UFB5ZtKWveVzddA8pMLQZPsdITMWCrVcygKRn3mGHdfiEK00he8Tomtvnvm5fAsUuF1QSgkLQvyt6vcsT+Xa5FJ4xiVtq55utye5fa3TRYgxowr/8s0vcbpG6b5oDGWQIBvkXcKZbF89ZvIRJhYq8zF7FereTxkvt8q/xMeX5JcdKuVxqAAUXxVddOUmQq/1DJ/p3l5z31vOv6B1EcHF+38iCX0BoeINPPRRu+3Ea0XIojlJEyTwzcQN1F0xXBOWnx34x2LopX5IJuV/wa4HB9Ay4wQhhz6sk8DIXGOpyrVHT0iv99ZQgKNpq/JR8xE+gn5CnIleGBB0h8fKCdH+Iy/9ercaFz",
		"acl": "public-read",
		"callback": "eyJjYWxsYmFja1VybCI6Imh0dHBzOlwvXC9hcGkteWljaGUtcHJlLnNhYXN5Yy5jb21cL3lpY2hlXC9vc3NcL2NhbGxiYWNrIiwiY2FsbGJhY2tCb2R5IjoiZmlsZW5hbWU9JHtvYmplY3R9JnNpemU9JHtzaXplfSZtaW1lVHlwZT0ke21pbWVUeXBlfSZoZWlnaHQ9JHtpbWFnZUluZm8uaGVpZ2h0fSZ3aWR0aD0ke2ltYWdlSW5mby53aWR0aH0iLCJjYWxsYmFja0JvZHlUeXBlIjoiYXBwbGljYXRpb25cL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCJ9",
		"policy": "eyJleHBpcmF0aW9uIjoiMjAyMC0wNC0xMVQxMTo1OToyM1oiLCJjb25kaXRpb25zIjpbWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMCwxMDQ4NTc2MDAwXSxbInN0YXJ0cy13aXRoIiwiJGtleSIsInlpY2hlXC91cGxvYWRzXC9pbWFnZVwvMjAyMDA0MTFcLyJdXX0=",
		"signature": "DmaeUtBqoRjOKy1/GrJIgP+hGFA=",
		"expire": 1586577563,
		"AccessKeySecret": "HCC136Z8v8hQYxXaibHE7JeDWDHTsgb7piwjgwYZmDUy",
		"dir": "yiche/uploads/image/20200411/",
		"fid": "84d9d0143baf2746e67326c44ae14166"
	}
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>