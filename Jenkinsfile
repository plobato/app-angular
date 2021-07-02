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
    
stage('Login'){
   steps {    
    withCredentials([string(credentialsId: 'DOCKER_HUB_PASSWORD', variable: 'PASSWORD')]) {
            sh 'docker login -u pablojl -p $PASSWORD'
       }
   }
}   
  
 stage("Push pero esta vezImage to Docker Hub"){
   steps {   
        sh 'docker push  pablojl/imagenes:v1'
   }
    } 
  
   } 
}
