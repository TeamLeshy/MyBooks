SystemJS.config({
    transpiler: 'plugin-babel',
    map: {
        'plugin-babel': '../../node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '../../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
        'books': '../../Utils/books.js',
        'templates': '../../templates/template.js',
        'router': '../../Utils/router.js',
        'userBooks': '../Utils/userBooks.js',
        'myBooks': '../Utils/myBooks.js',
        'app': '../../app.js',
    }
});

System.import('app');