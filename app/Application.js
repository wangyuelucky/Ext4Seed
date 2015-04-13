Ext.define('Seed.Application', {
    name: 'Seed',

    extend: 'Ext.app.Application',
    
    requires:[
        'Seed.view.FunctionC',
        'Seed.view.CalledFunctionC',
        'Seed.view.CalledParenthesizedFunctionC',
        'Seed.SingletonConfig',
        'Seed.StaticsConfig'
    ],
    
    mixins: ['Seed.MixinsConfig'],

    views: [
        // TODO: add views here
    ],

    controllers: [
        // TODO: add controllers here
    ],

    stores: [
        // TODO: add stores here
    ],
    launch: function () {
        /**
        * 类的定义方式的测试
        */
        var sc = Ext.create('StandardC'); // 注意：对象的创建方式
        alert('sc :'+ sc.getName()+ ' ,res: ' + sc.add(3,4));
        alert('sc :'+ sc.name+ ' ,res: ' + sc.add(3,4));
        
        var fc = new Seed.view.FunctionC();
        alert('fc :'+ fc.getName()+ ' ,res: ' + fc.add(5,4));
        alert('fc :'+ fc._name+ ' ,res: ' + fc.add(5,4)); // 注意访问不到
        
        var cfc = new Seed.view.CalledFunctionC();
        alert('cfc :'+ cfc.getName()+ ' ,res: ' + cfc.add(5,5));
        alert('cfc :'+ cfc._name+ ' ,res: ' + cfc.add(5,5)); // 注意访问不到
        
        var cpfc = new Seed.view.CalledParenthesizedFunctionC();
        alert('cpfc :'+ cpfc.getName()+ ' ,res: ' + cpfc.add(6,5));
        alert('cpfc :'+ cpfc._name+ ' ,res: ' + cpfc.add(6,5)); // 注意访问不到
        
        
        
        /**
        * 单例、静态类、混入的区别
        */
        
         //单例模式
        console.log('SingletonConfig:', Seed.SingletonConfig.property1);
        Seed.SingletonConfig.property1 = 1000;
        console.log('SingletonConfig:', Seed.SingletonConfig.property1);

        //静态属性和静态方法
        console.log('StaticsConfig:', Seed.StaticsConfig.property1);
        Seed.StaticsConfig.property1 = 1000;
        console.log('StaticsConfig:', Seed.StaticsConfig.property1);

        //混入
        console.log('MixinsConfig:', Seed.app.property1);
        Seed.app.property1 = 1000;
        console.log('MixinsConfig:', Seed.app.property1);

        console.log('MixinsConfig:', this.property1);

        console.log(Seed.SingletonConfig.getProperty2());
        try{
            console.log(Seed.StaticsConfig.getProperty2()); // 会报错，因为config配置的是实例的属性
        }catch(e){
            console.log('config配置的是实例的属性，静态类访问会报错！');
        }
        

        console.log(Seed.app);
        console.log(this);
        console.log(this.getProperty2());
    }
});


       