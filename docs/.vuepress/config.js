const navConf = require('../../config/navConf.js');

module.exports = {
	markdown: {
		lineNumbers: true
	},
	locales: {
		'/': {
			lang: 'zh-CN',
			title: 'sunUI',
			description: 'sunui使开发更加简单'
		},
		'/zh': {
			lang: 'en-US',
			title: 'sunUI',
			description: 'Sunui makes development easier'
		}
	},
	themeConfig: {
		smoothScroll: true,
		nav: navConf,
		sidebar: 'auto',
		smoothScroll: true,
		displayAllHeaders: true,
		// 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
		repo: 'Sunnshino/sunui-document',
		// 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
		// "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
		repoLabel: '查看源码',

		// 以下为可选的编辑链接选项

		// 假如你的文档仓库和项目本身不在一个仓库：
		docsRepo: 'Sunnshino/sunui-document',
		// 假如文档不是放在仓库的根目录下：
		docsDir: 'docs',
		// 假如文档放在一个特定的分支下：
		docsBranch: 'master',
		// 默认是 false, 设置为 true 来启用
		editLinks: true,
		// 默认为 "Edit this page"
		editLinkText: '在 GitHub 上编辑此页',
		lastUpdated: true
	}
}
