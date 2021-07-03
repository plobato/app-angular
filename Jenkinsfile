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
        sh 'docker tag angulo pablojl/imagenes:latest'
   }
    }   

stage('Login'){
   steps {    
    withCredentials([string(credentialsId: 'DOCKER_HUB_PASSWORD', variable: 'PASSWORD')]) {
            sh 'docker login -u pablojl -p $PASSWORD'
       }
   }
}   

 stage("Push pero esta vezImage to Docker Hub"){
   steps {   
        sh 'docker push  pablojl/imagenes:latest'
   }
    }



    stage("SSH Into k8s Server") {
        steps {
        script {
          def remote = [name: 'test', host: 'test.test.com', user: 'rao', password: 'password123', allowAnyHosts: true]
                        remote.name = 'K8S master'
        remote.host = '192.168.0.36'
        remote.user = 'pablo'
        remote.password = 'pablo'
        remote.allowAnyHosts = true
        sshPut remote: remote, from: 'k8_angulo_deployment.yaml', into: '.'
        
        
        sshCommand remote: remote, command: "kubectl --record deployment.apps/angular-deployment set image deployment.v1.apps/angular-deployment angular=pablojl/imagenes:latest"
        sshCommand remote: remote, command: "kubectl apply -f k8_angulo_deployment.yaml"
        sshCommand remote: remote, command: "kubectl --record deployment.apps/angular-deployment set image deployment.v1.apps/angular-deployment angular=pablojl/imagenes:latest"  
        }  
       }   
    } 
    
    
    
    
  
   } 
}
