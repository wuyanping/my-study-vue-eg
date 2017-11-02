<template>
	<div class="catalog">
		<ul>
			<li v-for="item in menus">
				<h2 class="h2">{{item.h2}}</h2>
				<ul v-if="item.number == 2">
					<li v-for="subItem in item.subMenus">
						<router-link :to="subItem.url">{{subItem.text}}</router-link>
					</li>
				</ul>
				<ul v-else-if="item.number == 3">
					<li v-for="subItem in item.subMenus">
						<h3 class="h3">{{subItem.h3}}</h3>
						<ul>
							<li v-for="subSubItem in subItem.subSubMenus">
								<router-link :to="subSubItem.url">{{subSubItem.text}}</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
    name: 'app',
    data () {
        return {
            menus: [
                {
                    h2: 'vue基础',
                    number: 3,
                    subMenus: [
                        {
                            h3: 'vue实例',
                            subSubMenus: [
                                {text: '构造器，属性与方法, 实例生命周期，生命周期图示', url: '/vueShiLi'},
                                {text: '计算属性', url: '/computed'},
                                {text: 'class与style绑定', url: '/classAndStyle'},
                                {text: 'template', url: '/template'}
                            ]
                        }
                    ]
                },
                {
                    h2: '进阶',
                    number: 3,
                    subMenus: [
                        {
                            h3: '混合',
                            subSubMenus: [
                                {text: '基础，选项合并，全局混合，自定义选项混合策略', url: '/mixin'},
                                {text: '计算属性', url: '/computed'},
                                {text: 'class与style绑定', url: '/classAndStyle'},
                                {text: 'template', url: '/template'}
                            ]
                        }
                    ]
                },
                {
                    h2: '网上学习的例子',
                    number: 2,
                    subMenus: [
                        {text: 'vue的拖拽', url: '/drag'},
                        {text: 'v-for2.vue', url: '/vFor'},
                        {text: 'word.vue用js转成word文档', url: '/word'}
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="scss">
/*// 这里需要说明一下scoped是让样式只在当前组件或者视图中起作用的。*/
.catalog {
	li{
		margin-left:30px;
	}
	.h3{
		color: green;
	}
}
</style>
