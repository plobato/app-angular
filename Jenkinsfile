pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '-p 3000:3000' 
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh 'apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python'
                sh 'npm install --cache=".pepe" --quiet node-gyp -g'
            }
        }
        stage('Test') { 
            steps {
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/test.sh' 
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
