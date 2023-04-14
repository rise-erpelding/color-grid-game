pipeline {
    agent { docker { image 'node:16.17.1-alpine' } }
    stages {
        stage('build') {
            steps {
                echo 'building...'
                sh 'node --version'
                sh 'npm ci'
            }
        }
        stage('test') {
            steps {
              sh 'npm test'
            }
        }
        stage('lint') {
            steps {
              sh 'npm run lint'
            }
        }
    }
}