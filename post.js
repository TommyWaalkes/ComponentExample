"use strict";
{
    let post = {
        bindings: {
            title: "<",
            body: "<"
        },
        template: `<h2> {{$ctrl.title}} </h2> 
            <p> {{$ctrl.body}}</p>
            
            <h2> hello world</h2>`,
        controller: function(){
            let vm = this;  
        }

    }
    angular
        .module("social")
        .component("post", post);
}