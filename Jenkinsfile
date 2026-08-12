pipeline {
    agent any
    
    environment {
        NODE_ENV = 'ci'
        CI = 'true'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo '🔄 Checking out code...'
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo '📦 Installing dependencies...'
                bat 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                echo '🧪 Running Playwright tests...'
                bat 'npm test'
            }
        }
    }
    
    post {
        always {
            echo '📊 Generating reports...'
            publishHTML([
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Test Report'
            ])
            archiveArtifacts artifacts: 'test-results/**/*,screenshots/**/*,videos/**/*', 
                             allowEmptyArchive: true
        }
        
        success {
            echo '✅ All tests passed!'
        }
        
        failure {
            echo '❌ Tests failed! Check report for details.'
        }
    }
}
