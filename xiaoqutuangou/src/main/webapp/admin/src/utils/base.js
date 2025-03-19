const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoqutuangou/",
            name: "xiaoqutuangou",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoqutuangou/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "小区团购管理"
        } 
    }
}
export default base
