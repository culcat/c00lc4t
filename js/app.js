'use strict'
(function(){
    function init(){
        var router = new Router([
            new Route('main','mainpage.html', true),
            new Route('project', 'project.html'),
            new Route('bio', 'bio.html'),
            new Route('clockproject', 'clockproject.html'),
            new Route('ghSearcher','ghSearcher.html')
        ])
    }
    init();
}())