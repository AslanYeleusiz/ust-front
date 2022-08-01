export default ({ app }) => {
    // В переменной роутс указывайте пути которые не должны входить не авторизованные пользователи

    const routes = ['menin-materialdarym','zharialau']
    app.router.beforeEach((to, from, next) => {
        console.log(to.name)
        var res = false
        const accessToken = app.$auth.strategy.token.get()
        if(!accessToken){
            routes.forEach(el => {
                if(to.name === el){
                    res = true
                }
            })
        }
        res ? app.$bus.$emit('openLogin') : next();
    })
}
