Cloud, microservizi e scalabilità 

Metriche

docker-desktop % kubectl run -i --tty load-generator --image=busybox --restart=Never -- /bin/sh -c "while true; do wget -q -O- http://frontend-app-service.5ds.svc.cluster.local:3000; done"
