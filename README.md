# Awesome Project Build with TypeORM

Steps to run this project:

1. Install node dependencies:
    -To install all the dependencies from `package.json`
    ```console
        yarn install
    ```

2. Compile the code, There are multiple ways to compile the code.:
    - Compile in `watch` mode
        ```console
        yarn compile:w
        ```
    - Compile for build
        ```console
        yarn compile
        ```

3. Populate the database with default values like admin, roles and statuses.
    ```console
        yarn run:migrations
    ```

4. Start project: 
    - To run the project in `watch` mode.
    ```console
        yarn dev:w
    ```
    - To run build as dev without `watch`.
    ```console
        yarn dev
    ```
5. For reset db schema use:
    - To reset db as dev.
    ```console
         yarn db-reset
      ```