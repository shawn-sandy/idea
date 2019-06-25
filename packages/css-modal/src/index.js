import Modal from './components/Index.vue';

let Plugin = {
    install: function (Vue, options = {}) {
        Vue.component('modal', Modal);

        Vue.prototype.$modal = {
            show(name) {
                location.hash = name;
            },

            hide(name) {
                location.hash = '#';
            }
        }
    }
};

export default Plugin;
