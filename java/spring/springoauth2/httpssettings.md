# auth server settings

```
server:
#  port: 8888
  context-path: /sso  
  port: 8443
  ssl:
    key-store: classpath:keystore
    key-password: epcpass
```

# client settings 

```
security:
  oauth2:
    client:
      accessTokenUri: https://localhost:8443/sso/oauth/token
      userAuthorizationUri: https://localhost:8443/sso/oauth/authorize
      clientId: admin
      clientSecret: adminsecret
    resource:
      userInfoUri: https://localhost:8443/sso/user
```

# keygen
oauth server：
```
C:\Users\chenghuilili> keytool -genkeypair -alias tomcat -keyalg RSA  -keystore keystore
输入密钥库口令:
再次输入新口令:
您的名字与姓氏是什么?
  [Unknown]:  localhost
您的组织单位名称是什么?
  [Unknown]:  epc
您的组织名称是什么?
  [Unknown]:  epc
您所在的城市或区域名称是什么?
  [Unknown]:  beijing
您所在的省/市/自治区名称是什么?
  [Unknown]:  beijing
该单位的双字母国家/地区代码是什么?
  [Unknown]:  china
CN=localhost, OU=epc, O=epc, L=beijing, ST=beijing, C=china是否正确?
  [否]:  y

输入 <tomcat> 的密钥口令
        (如果和密钥库口令相同, 按回车):
再次输入新口令:

C:\Users\chenghuilili>keytool -export -alias tomcat -keystore keystore -rfc -file tomcat.cer
输入密钥库口令:
存储在文件 <tomcat.cer> 中的证书
```
如果是本地测试，名字和姓氏使用localhost。将生成的keystore文件复制到认证服务器的classpath下。

client server:
```
C:\Users\chenghuilili>keytool -import -alias tomcat -file tomcat.cer -keystore truststore

C:\Users\chenghuilili>keytool -import -file tomcat.cer -alias tomcat -keystore D:\workspace\jdk\18_64\jre\lib\security\cacerts
```


