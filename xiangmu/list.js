;(function(){
    "use strict";
    
        class List {
            constructor() {
                this.url = "http://localhost/xiangmu/list.json";
                this.box = document.querySelector(".box");           
                this.load();           
                // this.addEvent();
            }
            load() {
                var that = this;
                ajax({
                    url: this.url,
                    success: function (res) {
                        that.res = JSON.parse(res),
                            that.display()
                    }
    
                })
            }
            display() {
                console.log(this.res)
                var str = "";
                for (var i = 0; i < this.res.length; i++) {
                    str += `<div class="goods" index="${this.res[i].goodsId}">
                    <a href=""><img src="${this.res[i].url}" alt=""></a>
                    <span>${this.res[i].price}</span>
                    <p>${this.res[i].name}</p>               
                    <i>加入购物车</i>
                </div>`
                }
                this.box.innerHTML = str;
            }
        }
        new List();
    
   
   
})();