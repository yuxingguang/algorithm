class Vue{
    constructor(options){
        // 1.保存数据
        this.$options = options;
        this.$data = options.data;
        this.$el = options.el;

        // 2.将data添加到响应式系统中
        new Observer(this.$data);

        // 3.代理this.$data的数据
        Object.keys(this.$data).forEach(key =>{
            this._proxy(key);
        })

        // 4.模板解析
        new Compiler(this.$el, this);
    }

    _proxy(key){
        Object.defineProperty(this, key, {
            configurable:true,
            enumerable:true,
            set(newValue){
                this.$data[key] = newValue;
            },
            get(){
                return this.$data[key];
            }
        })
    }
}

class Observer{
    constructor(data){
        this.data = data;
        Object.keys(data).forEach(key =>{
            this.defineReactive(this.data, key, data[key])
        })
    }
    defineReactive(data, key, val){
        const dep = new Dep();
        Object.defineProperty(data, key,{
            enumerable:true,
            configurable:true,
            get(){
                if(Dep.target){
                    dep.addSub(Dep.target);  // 这个target是一个观察者
                }
                return val;                  // 确定不是返回data[key]吗？
            },
            set(newValue){
                if(newValue === val){
                    return;
                }
                val = newValue; // 这个保存有点欠妥吧
                dep.notify();
            }
        })
    }
}

class Dep{
    static target = null;
    constructor(){
        this.subs = [];
    }
    addSub(watcher){
        this.subs.push(watcher)
    }
    notify(){
        this.subs.forEach(watcher =>{
            watcher.update();
        })
    }
}

class Watcher{
    constructor(node, name, vm, isInput){
        this.node = node;
        this.name = name;
        this.vm = vm;
        this.isInput = isInput;
        Dep.target=this;
        this.update(isInput);
        Dep.target = null;
    }
    update(){
        if(this.isInput){
            this.node.value = this.vm[this.name];
            return;
        }
        this.node.innerText = this.vm[this.name]; //触发get，添加观察者
    }
}

const reg = /\{\{(.*)\}\}/;

class Compiler{
    constructor(el, vm){
        this.el = document.querySelector(el);
        this.vm = vm;

        this.frag = this._createFragment();
        this.el.appendChild(this.frag);
    }

    _createFragment(){
        const frag = document.createDocumentFragment();
        let child;
        while(child = this.el.firstElementChild){
            this._compile(child);
            frag.appendChild(child);    // 该节点会从DOM树中删除，添加到文档碎片中，避免频繁引起重排重绘
        }
        return frag;
    }

    _compile(node){
        if(node.nodeName === 'INPUT'){
            const attrs = node.attributes;
            if(attrs.hasOwnProperty('v-model') && node.nodeName=='INPUT'){
                const name = attrs['v-model'].nodeValue;
                node.addEventListener('input', e=>{
                    this.vm[name] = e.target.value;
                })
                new Watcher(node, name, this.vm, true);
            }
        }else{
            if(reg.test(node.innerText)){
                const name = RegExp.$1.trim();
                new Watcher(node, name, this.vm);
            }
        }
    }
}