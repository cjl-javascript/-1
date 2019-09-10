; (function () {
    "use strict";

    class List {
        constructor() {
            this.url = "http://localhost/xiangmu/shopping/list.json";
            this.box = document.querySelector(".box");
            this.load();
            this.addEvent();
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
                    <a href="http://localhost/xiangmu/goods/goods.html?${this.res[i].goodsId}"><img src="${this.res[i].url}" alt=""></a>
                    <span>${this.res[i].price}</span>
                    <p>${this.res[i].name}</p>               
                    <i class="btn">加入购物车</i>
                </div>`
            }
            this.box.innerHTML = str;
        }
        addEvent() {
            var that = this;
            this.box.addEventListener("click", function (eve) {
                var e = eve || window.event;
                var target = e.target || e.srcElement;
                if (target.className == "btn") {
                    that.id = target.parentNode.getAttribute("index");
                    that.setLocal();
                }
               
            })
        }
        setLocal() {
            this.goods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
            if (this.goods.length < 1) {
                this.goods.push({
                    id: this.id,
                    num: 1
                })
            } else {
                var i;
                var o = this.goods.some((val, index) => {
                    i = index;
                    return val.id == this.id;
                })
                if (o) {
                    this.goods[i].num++;
                } else {
                    this.goods.push({
                        id: this.id,
                        num: 1
                    })
                }
            }
            localStorage.setItem("goods", JSON.stringify(this.goods));
        }
    }
    new List();
})();