01- css链接的link标签放在<head>标签内，而js链接的script标签放在body最后面，为何
    link是异步加载的，不影响下面的dom加载，script标签是同步加载的，会阻塞下面dom加载。解决办法，加async或deffer异步，async下载完立刻执行，deffer下载完会按引入顺序执行。

