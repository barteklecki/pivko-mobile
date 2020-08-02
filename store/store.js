import { observable } from 'mobx';

class AppStore {
    @observable beerList = [];
    @observable pageX = 1;
    @observable isFetching = false;
}

export default AppStore;
