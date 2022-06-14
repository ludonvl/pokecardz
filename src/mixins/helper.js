export default {
	install(Vue) {
		Vue.mixin({
			methods: {
                capitalizeFirstLetter(string) {
                    return string.charAt(0).toUpperCase() + string.slice(1);
                }
			}
		})
	}
}
