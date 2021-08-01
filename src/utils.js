export const localStorageHelper = {

    load() {
        const stored = localStorage.getItem('recipeFavourList');

        return stored ? JSON.parse(stored) : [];
    },
    store(value) {
        localStorage.setItem('recipeFavourList', JSON.stringify(value));
    },
};
