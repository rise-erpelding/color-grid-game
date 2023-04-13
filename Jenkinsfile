pipeline {
    agent { docker { image 'node:16.17.1-alpine' } }
    stages {
        stage('build') {
            steps {
                echo 'building...'
                sh 'node --version'
                sh 'npm i'
            }
        }
        stage('test') {
          steps {
            echo 'testing...'
          }
        }
        stage('lint') {
          steps {
            echo 'linting...'
          }
        }
    }
}