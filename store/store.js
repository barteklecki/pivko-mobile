import { observable } from 'mobx';

class AppStore {
    @observable beerList = [];
    @observable page = 1;
    @observable isFetching = false;
}

export default AppStore;
