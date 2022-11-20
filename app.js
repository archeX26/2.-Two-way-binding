const app = Vue.createApp({
    data(){
        return{
            user: '',
            confirmedUser: ''

        };
    },
    methods:{
        setUser(event){
            this.user = event.target.value;
        },
        myAlert(){
            alert("this is my alert")
        },
        confirmUser(){
            this.confirmedUser = this.user
        }

    }
});
app.mount('#assignment')