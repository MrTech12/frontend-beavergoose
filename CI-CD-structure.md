# CI/CD Structure

## Provider
GitHub Actions is being used as the CI/CD pipeline provider, because the code is already hosted on GitHub.
I already made use of GitLab's CI/CD solution in semester 3 and I wanted to try the offering of GitHub.

# Structure
* GitHub Actions make use of workflows, YAML files that are in a specific folder structure (.github/workflows folders). <br> 
In these files, triggers are defined for running a workflow, like a push to a branch, the creation of a pull request or issue. <br>
These files also contain jobs which houses steps. These steps can be the execution of a command or the execution of an action, that is created by another person/team. <br><br>

### test
* Purpose: building and running unit tests of a project, which includes displaying the test results and code coverage data.
* Special information: 
    - The workflow creates a Test Report of the passed and failed tests, which is available in the GitHub Actions interface.
    - The code coverage metric is retrieved from the generated XML file and displayed in the console. The data is also displayed as a comment of a pull request, if the workflow runs in the context of one.

### analyse
* Purpose: running code analysis tools, like Sonarcloud.
* Note: Sonarcloud could not process the xml file for detecting test runs, that are created with [this package](https://www.npmjs.com/package/karma-sonarqube-reporter)

### deploy
* Purpose: creating Docker images, pushing them onto DockerHub and deploying a new release onto a Kubernetes cluster.
* Special information
    - The workflow makes use of a program called `yq` to change the Docker image version of the Kubernetes manifest files, so that the deployment makes use of the newest Docker image.
    - the doctl (DigitalOcean CLI) is used to retrieve a kubeconfig file, for interacting with the Kubernetes cluster.