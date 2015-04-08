##To create one of your very own, please follow these steps (not all found on the [jHipster website](http://jhipster.github.io/)):

1. Install ```n```, a node version manager
    ```npm install -g n```
2. Set the node version to ```0.8.0``` or ```0.10.0``` (this installs and sets the node version)
    ```n 0.10.0```
3. That probably changed the version of ```npm``` used in your env; double-check with ```npm -version```
4. If your ```npm -version``` is lower than ```1.8```, update ```npm``` to the latest version
    ```npm install -g npm@latest```
5. Install yeoman and the jHipster generator
    ```npm install -g yo```
    ```npm install -g generator-jhipster```
6. Install the ```grunt-cli``` if you don't already have it
    ```npm install -g grunt-cli```
7. Create the project
    ```yo jhipster```
8. Import the project into IntelliJ
9. If necessary, update the indexed maven repos
10. Make sure the project SDK is the same as the Java version you chose when generating the project
11. Run with ```mvn spring-boot:run``` or ```gradle bootRun```, depending on the config
