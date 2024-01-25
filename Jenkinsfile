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
			script {
				// Menggunakan perintah checkout dari plugin Git di Jenkins dengan SSH dan kredensial
				checkout([$class: 'GitSCM', branches: [[name: 'master']], userRemoteConfigs: [[url: 'https://github.com/davidmarkal/nodeapp_test.git']], credentialsId: 'dmarkal'])
				
				// Menampilkan informasi log tambahan
				echo "Checkout completed successfully."
			}
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
