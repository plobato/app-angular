def nextVersionFromGit(scope) {
    def latestVersion = sh returnStdout: true, script: 'git describe --tags "$(git rev-list --tags=*.*.* --max-count=1 2> /dev/null)" 2> /dev/null || echo 0.0.0'
    def (major, minor, patch) = latestVersion.tokenize('.').collect { it.toInteger() }
    println "latestVersion: ${latestVersion}"
    def nextVersion
    switch (scope) {
        case 'major':
            nextVersion = "${major + 1}.0.0"
            break
        case 'minor':
            nextVersion = "${major}.${minor + 1}.0"
            break
        case 'patch':
            nextVersion = "${major}.${minor}.${patch + 1}"
            break
    }
    nextVersion
}

def defaultValue

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
                script{
                  defaultValue = nextVersionFromGit('minor')
                }  
                println "Next version is ${defaultValue}"
            }
        }
 stage('Push Image to Docker Hub'){
   
   steps {
        sh 'docker version'
        sh 'docker build -t angulo:0.6.0 .'

        println "Next version is ${defaultValue}"
        sh 'docker image list'
        sh "docker tag angulo:0.6.0 pablojl/imagenes:${defaultValue}"
   }
    }   

stage('Login'){
   steps {    
    withCredentials([string(credentialsId: 'DOCKER_HUB_PASSWORD', variable: 'PASSWORD')]) {
            sh 'docker login -u pablojl -p $PASSWORD'

             script{
                  defaultValue = nextVersionFromGit('minor')
                }  
             println "Next version EEEEEEEEEEEEEEEEEE is ${defaultValue}"            
       }
   }
}   

 stage("Push pero esta vezImage to Docker Hub"){
   steps {   
        sh "docker push  pablojl/imagenes:${defaultValue}"
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
        
        
        sshCommand remote: remote, command: "kubectl --record deployment.apps/angular-deployment set image deployment.v1.apps/angular-deployment angular=pablojl/imagenes:${defaultValue}"
        sshCommand remote: remote, command: "kubectl apply -f k8_angulo_deployment.yaml"
        sshCommand remote: remote, command: "kubectl --record deployment.apps/angular-deployment set image deployment.v1.apps/angular-deployment angular=pablojl/imagenes:${defaultValue}"  
        }  
       }   
    } 
    
    
    
    
  
   } 
}
