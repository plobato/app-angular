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
 stage("Docker build"){
        sh 'docker version'
        sh 'docker build -t angulo .'
        sh 'docker image list'
        sh 'docker tag angulo pablojl/imagenes:v1'
    }        
  
  
  
   } 
}
