"use strict";
{
    let socialPosts = {
        template:`<post ng-repeat="p in $ctrl.posts" title="p.title" body="p.body"></post>` ,

        controller: function(){
            let vm = this;
            vm.posts = [{
                title: "Breaking News", body: "Chimp wins the lottery"
            },
            {
                title: "Fire Sale", body: "You're missing out"
            },
            {
                title: "Slim Shady beefs with Meijer", body: "Het got mad cause meijer didn't have his vitagummies"
            }]
        }

    }

    angular
    .module("social")
    .component("socialPosts", socialPosts);
}