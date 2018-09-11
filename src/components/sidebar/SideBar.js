import NavLink from '../navLink/NavLink.vue'

export default{
    name: 'sidebar',
    components: {
        NavLink
    },
    data: function() {
        return {
            target: ''
        }
    },
    methods: {
        toggle: function(target) {
            if(target === this.target){
                this.target = ''
            }else{
                this.target = target
            }
            
        }
    }
}