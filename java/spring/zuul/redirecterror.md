当使用zuul代理的应用使用redirect进行页面跳转时，则跳转后的地址转到被代理应用的主机。需要配置：

```

zuul:
  add-host-header: true

```