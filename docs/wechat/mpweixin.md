
<!-- ::: tip
微信小程序授权
::: -->


``` html
<view>
	<view class="sunui-title">微信小程序授权</view>
	<button @click="goAuth">登录</button>
</view>
```

``` js
export default {
		data() {
			return {

			}
		},
		methods: {
			goAuth() {
				// 需要授权的页面以及携带参数
				weChatAuth(`/pages/index/cell/cell`, `a=1&b=2`);
			}
		}
	}

	// 微信小程序拦截(url:地址,param:参数)
	const weChatAuth = (url, param) => {
		let parse = JSON.stringify(encodeURIComponent(param));
		if (!uni.getStorageSync('userInfo')) {
			// 这个跳转路径可根据项目实际更改
			uni.navigateTo({
				url: `/pages/index/auth/auth?url=${url}&parse=${parse}`
			});
		} else {
			uni.navigateTo({
				url: `${url}?${param}`
			});
		}
	}
```