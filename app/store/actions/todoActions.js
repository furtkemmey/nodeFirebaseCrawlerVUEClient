import * as todoTypes from '../todo-types.js'

export default {
    // [todoTypes.INIT]({commit}) { // 簡化寫法
    [todoTypes.INIT](context) {         
        var config = {
            apiKey: " AIzaSyAOxIC_0mS55dPs0kdS3pH3lX-VWbIylJg",
            authDomain: "petsapp-d236c.firebaseapp.com",
            databaseURL: "https://petsapp-d236c.firebaseio.com",
            projectId: "petsapp-d236c",
            storageBucket: "petsapp.appspot.com",
        };
        firebase.initializeApp(config);   
        var ref = firebase.database().ref('/movies/')
        ref.once('value').then(function(snapshot){
            var val = snapshot.val();
            context.commit(todoTypes.INIT, val);
        });
    }
}