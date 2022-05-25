Vue.component('error', {
    data() {
        return {
            error: false
        }
    },
    template: `<div class='error_block' v-if='error'>
        <span class='error_text'>Упс... Что-то пошло не так :с</span>
    </div>`
})