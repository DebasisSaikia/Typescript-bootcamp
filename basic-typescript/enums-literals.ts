 enum LoadingState{
    beforeLoad="beforeLoad",
    loading="loading",
    loaded="loaded",
}

const isLoading=(state:LoadingState)=>state===LoadingState.loading

console.log(isLoading(LoadingState.beforeLoad));

