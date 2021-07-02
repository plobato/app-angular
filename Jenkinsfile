pipeline {
  agent {
    docker { 
      image 'node:latest' 
      args '-p 4200:4200'
    }
  }
  stages {
        stage('Build') {
            steps {
                sh 'npm install --cache=".tpp"'
                sh 'npm install -g @angular/cli'
            }
        }
 stage('Push Image to Docker Hub'){
   steps {
        sh 'docker version'
        sh 'docker build -t angulo .'
        sh 'docker image list'
        sh 'docker tag angulo pablojl/imagenes:v1'
   }
    }   
    
    
  stage("Docker Login"){
        withCredentials([string(credentialsId: 'DOCKER_HUB_PASSWORD', variable: 'PASSWORD')]) {
            sh 'docker login -u rahulwagh17 -p $PASSWORD'
        }
    } 
  stage("Push Image to Docker Hub"){
        sh 'docker push  pablojl/imagenes:v1'
    }
  
  
      stage("SSH Into k8s Server") {
        
        def remote = [:]
        remote.name = 'K8S master'
        remote.host = '192.168.0.36'
        remote.user = 'pablo'
        remote.password = 'pablo'
        remote.allowAnyHosts = true

        stage('Put k8s-spring-boot-deployment.yml onto k8smaster') {
          steps {
            sshPut remote: remote, from: 'k8s-spring-boot-deployment.yml', into: '.'
          }  
        }

        stage('Deploy spring boot') {
          steps {
          sshCommand remote: remote, command: "kubectl apply -f k8s-spring-boot-deployment.yml"
          }
        }
    }    
  
  
  
   } 
}
