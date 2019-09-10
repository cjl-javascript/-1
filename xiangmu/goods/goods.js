; (function () {
    "use strict";
 
    class Goods {
        constructor() {
          this.id=location.search.slice(1);
            //console.log(this.id)
        this.url="http://localhost/xiangmu/goods/goods.json";
        this.box = document.querySelector("main");
        this.load();
    }
    load(){
        var that=this;
        ajax({
            url:this.url,
            success:function(res){
                that.res = JSON.parse(res),
                        that.display()
            }
        })
       
    }
    display(){
        console.log(this.res)
            var str = "";
            for (var i = 0; i < this.res.length; i++) {
                if(this.res[i].goodsId==this.id){
                    str += `<div class="margin">
                    <div class="left">
                        <div class="big">
                                <img src="${this.res[i].url}" alt="" >
                                <p class="move"></p>
                        </div>              
                        <img src="${this.res[i].url}" alt="" class="small">
                    </div>
                    <div id="big">
                            <img src="${this.res[i].url}" id="look_big" />
                    </div>
                    <div class="right">
                        <p class="name">${this.res[i].name}</p>
                        <div class="r-c">
        
                            <span>本店价</span>
                            <p class="price1">¥${this.res[i].price}</p>
                            <span>市场价</span> <del>¥${this.res[i].price2}</del>
                        </div>
                        <div class="r-b">
                            <span>数量</span>
                            <input type="number" name="" id="">
                            <span>件</span>
                        </div>
                        <div class="buy">
                            <a href="" class="al">单买镜框</a>
                            <a href="" class="ar">配上镜片</a>
                        </div>
                    </div>
                </div>`
                }
                
            }
            this.box.innerHTML = str;
    }
}
    new Goods();
  
    
})();