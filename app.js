var vm1 = new Vue({
    el: '#app',
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!",
            signUpText: "Add your name to the guest list for <em>exclusive offers</em>:"
        },
        newNameText: '',
        guestName: [],
        eventCapacity: 5,
        eventCapacityPercentage: 0,
        effect1: "scale"
    },
    methods: {
        formSubmitted: function() {
            if(this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
                this.guestName.push(this.newNameText)
                this.newNameText = ''
                this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity / 100)
            }
        },
        keyPressed: function(){
            console.log('key pressed')
        }
    },
    computed: {
        sortName: function() {
            console.log('sorted')
            return this.guestName.sort()
        }
    },
    watch: {
        guestName: function(data) {
            console.log('Watch triggered')
        }
    },
    filters: {
        formatName: function(value) {
            return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase()
        }
    },
    beforeCreate() {
        console.log('before create')
    },
    created() {
        console.log('created')
    },
    beforeMount() {
        console.log('before mount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('before update')
    },
    updated() {
        console.log('updated')
    },
    beforeDestroy() {
        console.log('before destroy')
    },
    destroyed() {
        console.log('destroyed')
    },
});

var vm2 = new Vue({
    el: '#navigation',
    data: {
        appName: 'Guest List',
        navLinks: [
            {name: "Home", id: 1, url: "https://linktr.ee/binary_greens"},
            {name: "Ucoming Events", id: 2, url: "https://www.amazon.in"},
            {name: "Guest Benifits", id: 3, url: "https://www.facebook.com"},
            {name: "Latest News", id: 4, url: "https://www.flipkart.com"},
        ]
    }, 
    methods: {
        changeTitle: function() {
            this.$refs.name.innerText = 'Title changed'
            console.log(this.$refs)
        }
    }
})


// console.log(vm1)