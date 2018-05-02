我:
1.gitlab-ctl stop
我:
2. ps -ef | grep nginx
我:
3 .在输出中找到 master进程
我:
root      1880     1  0 22:32 ?        00:00:00 nginx: master process nginx
我:
4.kill 这个进程
我:
kill -quit 1880
我:
5. service gitlab restart
我:
6.nginx