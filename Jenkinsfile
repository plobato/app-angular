pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '-p 4200:4200' 
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install --cache=".pepe"'
                sh 'npm update'
            }
        }        
        stage('Deliver') { 
            steps {
                sh 'npm start'
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}
