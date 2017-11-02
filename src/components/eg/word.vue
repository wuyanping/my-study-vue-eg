<template>
	<div>
		<p><a @click='generate'>生成文档</a></p>
	</div>
</template>
<script>
// import JSZip from '../../plugin/jszip.js'
// import DDoc from '../../plugin/DDoc.js'

export default {
    data () {
        return {
        }
    },
    mounted: {
    },
    methods: {
        generate () {
            // var zip = new JSZip()
            // console.log(zip)
            // var doc = new DDoc()
            // doc.addParagraph('添加一个段落')
            // doc.addParagraph('添加一个段落，设置字体和大小', {
            //     font: 'Microsoft YaHei UI',
            //     italic: true,
            //     underline: doc.UnderlineType.Wave,
            //     underlineColor: 'FF0000',
            //     strike: true,
            //     shadow: 'FFFFFF',
            //     textAlign: doc.AlignType.Center,
            //     lineHeight: 3
            // })

            // doc.addHeader('标题1', doc.HeaderType.H1)

            // doc.addList(['第1章', '第2章', '第3章'])

            // doc.addEmptyTable(4, 5)
            // doc.newLine()
            // doc.addTable([
            //     [1, 2, 3],
            //     [4, 5, 6],
            //     [7, 8, 9]
            // ], {color: 'FF0000'})

            // var _temp = 'data:image/pngbase64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAmCAIAAADyTaq0AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAWFJREFUWEftVgkOhCAMVB+0L9n/f4flUGQVcIptPQIhakwpnZm2MA6f7/C8YdaQw+foHtOtgRgzZGcMOoLyHzpg7FZts0p1Io+zM0pgWuW3yZOdBX9yyqRSHAkTgsPFUwIzS+9f/3Ba1Sms2+SYt8KVsbXoA6w/ZxBLhynlyeZ/CDj8REYOCQzGtRQAyWqDRMRvgytzbu+QcsJDBUx6GmSrnAmkBYM0kdbdVASJwU0zlkq0zemxX0g8NygUOtqWNKvIE/sM2Jqsma4gsRxVaobCMN12TQAMDFJWZ45IdO1B98DA0OnKryiRwuTfg4nFwOT0KjcejHa9SoFN0qy5BUvFRvbbXDN3VBMEs6/cQBu1zZ20P9AKBENW/JIFymAE7zOWPmUwsoJtwAifasUa4wH5NmXQixEPe5Je3qaMJFe6vrsyunzju3VlcK54LWPfLZxXXRlevvm8dWX4uOT19CplfqqGCgdY+hAkAAAAAElFTkSuQmCC'
            // doc.addImage(_temp, 100, 50, {
            //     textAlign: doc.AlignType.Center
            // })

            // doc.addHyperlink('Github地址', 'https://github.com/DistChen/DDoc.js', {
            //     fontSize: '30',
            //     bold: true
            // })
            // doc.generate()
        }
    }
}
</script>
<style>
.wrap{
	width: 100%
}
</style>
