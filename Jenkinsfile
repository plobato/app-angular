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
            }
        }
        stage('Test') { 
            steps {
                sh 'ng serve --host 0.0.0.0 --disable-host-check ' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
            }
        }
        stage('Deliver') { 
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/scripts/kill.sh' 
            }
        }
  }
}
