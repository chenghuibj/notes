# 获取jinkens image
```
docker run --rm -u root -p 9999:8080 -v jenkins-data:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock -v "%HOMEPATH%":/home jenkinsci/blueocean

```