<template>
	<el-container>
		<!-- 这是头部区域 -->
		<el-header>
			<div>
				<img src='../assets/image/splus.d4f630ad.png' />
			</div>

			<el-menu :default-active='activeIndex' class='el-menu-demo' mode='horizontal' background-color='#008eff'
				text-color='#FFFFFF' router>
				<el-menu-item :index='this.path.path1' @click='saveActiveIndex(this.path.path1)'>首页</el-menu-item>
				<el-menu-item :index='this.path.path2' @click='saveActiveIndex(this.path.path2)'>收费管理</el-menu-item>
				<el-menu-item :index='this.path.path3' @click='saveActiveIndex(index)'>学生管理</el-menu-item>
				<el-menu-item :index='this.path.path4' @click='saveActiveIndex(index)'>老师管理</el-menu-item>
			</el-menu>
			<el-button type='info' @click='exit'>退出</el-button>
		</el-header>

		<el-container>
			<router-view></router-view>
		</el-container>
	</el-container>
</template>

<script>
export default {
	data() {
		return {
			//   index: "index",
			activeIndex: "",
			path: {
				path1: "/viewcontent",
				path2: "/sendbill",
				path3: "/student",
				path4: "/teacherManage",
			},
		};
	},
	created() {
		this.activeIndex = window.sessionStorage.getItem("activeIndex");
	},
	methods: {
		exit() {
			window.sessionStorage.clear();
			this.$router.push("/login");
		},
		saveActiveIndex(activeIndex) {
			window.sessionStorage.setItem("activeIndex", activeIndex);
			this.activeIndex = activeIndex;
			console.log("你才是");
		},
	},
};
</script>

<style lang="scss" scoped>
.el-container {
	height: 100%;
}
.el-header {
	display: flex;
	align-items: center;
	background-color: #008eff;

	div {
		width: 184px;
		min-width: 184px;
		img {
			height: 42px;
			max-width: 130px;
		}
	}

	ul {
		display: inline-block;
		background-color: #008eff;
	}
	.el-menu {
		margin-left: 20px;
		width: 600px;
	}
}
.el-button {
	position: absolute;

	right: 10px;
}
</style>
