pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
        IMAGE_BACKEND = "2023bcd0015/2023bcd15_backend"
        IMAGE_FRONTEND = "2023bcd0015/2023bcd15_frontend"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                dir('Backend') {
                    sh 'docker build -t $IMAGE_BACKEND .'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('Frontend') {
                    sh 'docker build -t $IMAGE_FRONTEND .'
                }
            }
        }

        stage('Login to DockerHub') {
            steps {
                sh """
                echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin
                """
            }
        }

        stage('Push Images') {
            steps {
                sh 'docker push $IMAGE_BACKEND'
                sh 'docker push $IMAGE_FRONTEND'
            }
        }
    }
}
