new Vue({
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
        isSubmit: false,
        appStyles: {
            marginTop: '25px',
            color: 'rgb(66,66,66)'
        }
    },
    methods: {
        formSubmitted: function() {
            // console.log(this.newNameText)
            if(this.newNameText.length > 0) {
                this.guestName.push(this.newNameText)
                this.newNameText = ''
                this.isSubmit = true
            }
        }
    }
});