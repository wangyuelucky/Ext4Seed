## 利用Ext cmd工具生成原始工程
首先，安装cmd环境；然后，切换到工程目录；运行sencha web start启动server；在浏览器中访问1841端口。


# Seed/app

This folder contains the javascript files for the application.

# Seed/resources

This folder contains static resources (typically an `"images"` folder as well).

# Seed/overrides

This folder contains override classes. All overrides in this folder will be 
automatically included in application builds if the target class of the override
is loaded.

# Seed/sass/etc

This folder contains misc. support code for sass builds (global functions, 
mixins, etc.)

# Seed/sass/src

This folder contains sass files defining css rules corresponding to classes
included in the application's javascript code build.  By default, files in this 
folder are mapped to the application's root namespace, 'Seed'. The
namespace to which files in this directory are matched is controlled by the
app.sass.namespace property in Seed/.sencha/app/sencha.cfg. 

# Seed/sass/var

This folder contains sass files defining sass variables corresponding to classes
included in the application's javascript code build.  By default, files in this 
folder are mapped to the application's root namespace, 'Seed'. The
namespace to which files in this directory are matched is controlled by the
app.sass.namespace property in Seed/.sencha/app/sencha.cfg. 


1. definition.js 约等于 manifestDefinition.js
	都是对类定义的抽象，并且列出了直接require和use的类
	
2. definitionAppManifest.js 约等于 definitionLoadOrder.js
	后者包含了每一个类的依赖类（直接依赖、间接依赖以及不明显依赖，比如：extend），以及类编号和路径
	前者，包含三部分内容：
		paths —— 命名空间根路径；
		loadOrder —— 等于definitionLoadOrder.js
		classes —— 类的名字、编号、别名、备用空间名
	
		
	这样，definitionAppManifest.js就把类名、别名、备用空间、路径、所有的依赖类，都包含了进来。
	
	所以，通过分析definitionAppManifest.js文件，可以满足我们的需求。
	下一步，通过写自定义的类，来测试可行性。
	


3. manifestFilename.js 等于 filenames.txt
	列出来所有类文件的路径
	
	
4. minifextDefinition.js 约等于 definition.js
	列出来所有类的定义，以及uses 和 requires