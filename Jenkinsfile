pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo 'Source code checked out successfully'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build \
                    -f docker/Dockerfile \
                    -t my-portfolio:build .
                '''
            }
        }

        stage('Docker Test') {
            steps {
                sh '''
                    docker run -d \
                    --name portfolio-test \
                    -p 8081:3000 \
                    my-portfolio:build

                    i=1
                    while [ $i -le 10 ]; do
                      if curl --fail --silent --max-time 5 http://localhost:8081; then
                        echo "Application is healthy"
                        exit 0
                      fi

                      echo "Waiting for application..."
                      sleep 3

                      i=$((i+1))
                    done

                    echo "application health check failed"
                    exit 1
                '''
            }

            post {
                always {
                    sh 'docker rm -f portfolio-test || true'
                }
            }
        }
    }
}
