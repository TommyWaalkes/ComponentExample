"use strict";
{
    let postForm = {
        bindings:{
            posts: "<"
        } ,

        templateUrl: "postForm.html",

        controller: function(){
            let vm = this;
            vm.PushNewPost = function(newTitle, newBody){
                let newPost = {
                    title: newTitle,
                    body: newBody
                }
                vm.posts.push(newPost);
            }
        }
    }

    angular
    .module("social")
    .component("postForm", postForm);
}