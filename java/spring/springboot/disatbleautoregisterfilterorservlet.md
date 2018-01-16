spring boot注册的Filter Bean会自动注册到Filterchain。如果取消，需要创建一个FilterRegistrationBean。

```

@Bean
public FilterRegistrationBean registration(MyFilter filter) {
    FilterRegistrationBean registration = new FilterRegistrationBean(filter);
    registration.setEnabled(false);
    return registration;
}

```