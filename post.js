"use strict";
{
    let post = {
        bindings: {
            title: "<",
            body: "<"
        },
        template: `<h2> {{$ctrl.title}} </h2> 
            <p> {{$ctrl.body}}</p>`,
        controller: function(){
            let vm = this;
            //vm.title ="Slim Shady drops a new Album";
            //vm.body = "asldgkuhasldkjg,hzlk,fhaskejf,hs.dzkfjhaz.dkfjaleskjfasd.kjf,hasdljshadflkjasdsvd;lkjvd"
        }

    }
    angular
        .module("social")
        .component("post", post);
}