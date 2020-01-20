## 基本配置

<!-- type可以是tip/warning/error -->
<Badge text="当前版本号：1.0.0" type="warning"/>

|更新时间/版本						|名称		|类型		|默认值										|功能作用														|
|--									|--			|--			|--											|--																|
|2020/01/19 <Badge text="1.0.0"/>	|@input		|function	|```无```									|接收文本框的返回值												|
|2020/01/19 <Badge text="1.0.0"/>	|indent		|string		|```0em```									|设置首行缩进(建议2em)											|
|2020/01/19 <Badge text="1.0.0"/>	|styTextarea|string		|```padding:2%;background-color:#f5f5f5;```	|使用行内样式来**设置文本框样式**								|
|2020/01/19 <Badge text="1.0.0"/>	|styMaxnum	|string		|```text-align:right;color:#4888F2;```		|使用行内样式来设置**提示样式**									|
|2020/01/19 <Badge text="1.0.0"/>	|ref		|unknow		|```子组件页面实例```						|获取子组件实例，并且**可以操作使用子组件的方法以及改变它的值**	|


<!-- ### @input
* 类型：function
* 默认值：```无```
* 功能作用：接收文本框的返回值

### indent
* 类型：String
* 默认值：```0em```
* 功能作用：一般设置2em用于首行缩进

### styTextarea
* 类型：String
* 默认值：```padding:2%;background-color:#f5f5f5;```
* 功能作用：使用行内样式来**设置文本框样式**

### styMaxnum
* 类型：String
* 默认值：```text-align:right;color:#4888F2;```
* 功能作用：使用行内样式来设置**提示样式**


### ref
* 类型：Unknow
* 默认值：```子组件页面实例```
* 功能作用：获取子组件实例，并且**可以操作使用子组件的方法以及改变它的值** -->
::: warning 注意
父组件获取子组件的ref实例时注意：
1. 在mounted生命周期获取
2. 使用this.nextTick
:::

::: danger 不合理操作
父组件获取子组件的ref实例时注意，此方法可能不适合：
1. 使用setTimeout
:::

## 复制到页面

### template
``` html {6,9}
 <view class="index-page">
		<view class="sunui-title">文本框(默认)</view>
        <!-- indent代表首行缩进，一般用2em即可 -->
        <!-- styTextarea设置textarea样式：font-size:0.8em;padding:2%;background-color:#F5F5F5; -->
        <!-- styMaxnum设置输入提示样式：text-align:right;color:#4888F2; -->
        <sunui-textarea ref="textarea1" indent="0em" @input="getInput1"></sunui-textarea>
		
		<view class="sunui-title">文本框(首行缩进)</view>
		 <sunui-textarea ref="textarea2" indent="2em" @input="getInput2"></sunui-textarea>
  </view>
```

### css
``` css
	
```


### js

``` js
 import sunUiTextarea from "@/components/sunui-textarea/sunui-textarea.vue";
    export default {
        components: {
            'sunui-textarea': sunUiTextarea
        },
        data() {
            return {}
        },
        onShow() {
 
        },
        onLoad() {
            this.$nextTick(function(){
            	this.setRefsTextarea1();
				this.setRefsTextarea2();
            })
        },
        methods: {
            setRefsTextarea1() {
              // 是否显示输入输入样式提示,默认false
              this.$refs.textarea1.maxnum = true;
              // 输入最大数量,传-1代表无限,默认为-1
              this.$refs.textarea1.maxlength = 40;
              // 弹出键盘高度,默认40
              this.$refs.textarea1.cursor = 40;
              // 是否禁用输入,默认不禁用
              this.$refs.textarea1.disabled = false;
              // 是否显示组件,默认显示（控制它显示隐藏textarea）
              this.$refs.textarea1.show = true;
              // 描述文字,默认简述文字...
              this.$refs.textarea1.placeholder = "请输入你的备注...";
            },
			setRefsTextarea2() {
			  // 是否显示输入输入样式提示,默认false
			  this.$refs.textarea2.maxnum = true;
			  // 输入最大数量,传-1代表无限,默认为-1
			  this.$refs.textarea2.maxlength = 40;
			  // 弹出键盘高度,默认40
			  this.$refs.textarea2.cursor = 40;
			  // 是否禁用输入,默认不禁用
			  this.$refs.textarea2.disabled = false;
			  // 是否显示组件,默认显示（控制它显示隐藏textarea）
			  this.$refs.textarea2.show = true;
			  // 描述文字,默认简述文字...
			  this.$refs.textarea2.placeholder = "请输入你的备注呀...";
			},
            getInput1(e) {
                console.log(e);
            },
			getInput2(e) {
			    console.log(e);
			}
        }
    }
```

