pipeline {
    agent any
    stages {
        stage('SSH Declarative Example') {
            steps {
                 script {
                     def remote = [name: 'test', host: '192.168.0.36', user: 'pablo', password: "pablo', allowAnyHosts: true]
                     sshCommand remote: remote, command: "for i in {1..5}; do echo -n \"Loop \$i \"; date ; sleep 1; done"
                 }
            }
        }
    }
}    
