pipeline {
  
 
  agent {
    docker { 
      image 'node:latest' 
      args '-p 4200:4200'
    }
  }
  stages {
        
    

    stage("SSH Into k8s Server") {
        steps {
        script {
          def remote = [name: 'test', host: 'test.test.com', user: 'rao', password: "password123', allowAnyHosts: true]
                        remote.name = 'K8S master'
        remote.host = '192.168.0.36'
        remote.user = 'pablo'
        remote.password = 'pablo'
        remote.allowAnyHosts = true
        sshPut remote: remote, from: 'k8s-spring-boot-deployment.yml', into: '.'
        sshCommand remote: remote, command: "kubectl apply -f k8s-spring-boot-deployment.yml"
        }  
       }   
    } 
    
    
    
    
  
   } 
}
