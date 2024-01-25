pipeline {
  environment {
    dockerImageName = "mcdelivery86/nodeapp"
    dockerImageTag = "${dockerImageName}:${env.BUILD_ID}"
    dockerImage = ""
  }

  agent any
  
  stages {
	  
     stage('Checkout Source') {
      steps {
        git 'https://github.com/davidmarkal/nodeapp_test.git'
      }
    }

    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build dockerImageTag
        }
      }
    }

    stage('Pushing Image') {
      environment {
        registryCredential = 'dockerhublogin'
      }
      steps{
        script {
          docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
            dockerImage.push("${env.BUILD_ID}")
            dockerImage.push("latest") // Juga push ke tag 'latest'
          }
        }
      }
    }

    stage('Deploying App to Kubernetes') {
      steps {
        script {
          sh 'kubectl apply -f deploymentservice.yml'
        }
      }
    }
  }
}
