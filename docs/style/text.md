# 基本样式



### template
```html
<view>
		<view class="sunui-title">文本样式</view>
		<view class="sunui-grid-3">
			<view class="item" style="font-weight: bold;">加粗</view>
			<view class="item" style="text-decoration: line-through;">贯穿(删除)线</view>
			<view class="item" style="text-decoration: overline ;">上划线</view>
			<view class="item" style="text-decoration: underline;">下划线</view>
			<view class="item" style="font-style: italic;">倾斜</view>
			<view class="item" style="font-style: italic;text-decoration:underline ;">倾斜+下划线</view>
			<view class="item" style="text-transform: uppercase;">ab字母大写</view>
			<view class="item" style="text-transform: lowercase;">AB字母小写</view>
			<view class="item" style="text-shadow: 0.1em 0.1em 0.05em #333;">文字阴影</view>
			<view class="item" style="color: rgba(0,0,0,.2);">透明文字</view>
			<view class="item" style="text-shadow: 0 0 2px #f00;-webkit-text-fill-color: transparent;">模糊文字</view>
			<view class="item" style="-webkit-text-stroke: 1px red;-webkit-text-fill-color: transparent;">镂空文字</view>
			<view class="item" style="background: linear-gradient(to bottom,blue,red);-webkit-text-fill-color: transparent;-webkit-background-clip: text;">渐变文字</view>
		</view>
		<view class="sunui-title">首行缩进</view>
		<view style="text-indent: 2em;">首行缩进首行缩进首行缩进首行缩进首行缩进首行缩进首行缩进首行缩进首行缩进</view>
		<view class="sunui-title">文字垂直居中(设置行高和盒子高度相同)</view>
		<view style="height: 110px;line-height:110px;text-align: center;border: 1px solid #eee;">文字垂直居中</view>
	</view>
```
### css
``` css
.sunui-title {
		margin-bottom: 4%;
	}

	.sunui-grid-3 {
		margin: 2%;
	}

	.sunui-grid-3>.item {
		text-align: center;
		border-radius: 10upx;
		padding: 8% 6%;
		box-shadow: 0 2upx 10upx rgba(0, 0, 0, .2);
	}
```

### js
``` js
export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
```


# 演示效果
--------------------------------------------------

<div>
	<div class="item" style="font-weight: bold;">加粗</div>
	<div class="item" style="text-decoration: line-through;">贯穿(删除)线</div>
	<div class="item" style="text-decoration: overline ;">上划线</div>
	<div class="item" style="text-decoration: underline;">下划线</div>
	<div class="item" style="font-style: italic;">倾斜</div>
	<div class="item" style="font-style: italic;text-decoration:underline ;">倾斜+下划线</div>
	<div class="item" style="text-transform: uppercase;">ab字母大写</div>
	<div class="item" style="text-transform: lowercase;">AB字母小写</div>
	<div class="item" style="text-shadow: 0.1em 0.1em 0.05em #333;">文字阴影</div>
	<div class="item" style="color: rgba(0,0,0,.2);">透明文字</div>
	<div class="item" style="text-shadow: 0 0 2px #f00;-webkit-text-fill-color: transparent;">模糊文字</div>
	<div class="item" style="-webkit-text-stroke: 1px red;-webkit-text-fill-color: transparent;">镂空文字</div>
	<div class="item" style="background: linear-gradient(to bottom,blue,red);-webkit-text-fill-color: transparent;-webkit-background-clip: text;">渐变文字</div>
</div>