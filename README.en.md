**Read in other languages: [Ukrainian](README.md), [English](README.en.md).**

# React delivery app

This project was created with
[Create React App](https://github.com/facebook/create-react-app).

## Preparing a new project

1. Make sure you have an LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) if needed.

2. Install the basic project dependencies with the `npm install` command.
3. Start development mode by running the `npm start` command.
4. Go to [http://localhost:3000](http://localhost:3000) in your browser. This
   page will automatically reload after saving changes to project files.

## Deploy

To set up a project deployment, you need to perform a few additional steps to
set up your repository. Go to the `Settings` tab and in the subsection `Actions`
select select item `General`.

![GitHub actions settings](./assets/actions-config-step-1.png)

Scroll down the page to the last section, in which select the options as in the
following image and click `Save`. Without these settings, the assembly will have
insufficient rights to automate the deployment process.

![GitHub actions settings](./assets/actions-config-step-2.png)

### Deployment status

The deployment status of the latest commit is displayed with an icon next to its
ID.

- **Yellow color** - the project is being built and deployed.
- **Green color** - deployment completed successfully.
- **Red color** - an error occurred during linting, build or deployment.

More detailed information about the status can be viewed by clicking on the
icon, and in drop-down window to follow the link `Details`.

![Deployment status](./assets/status.png)
