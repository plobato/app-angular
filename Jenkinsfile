pipeline {
  agent {
    docker { image 'node:latest' }
  }
  stages {
    stage('Build') {
            steps {
                sh 'npm install --cache=".tpp"'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm start' 
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
