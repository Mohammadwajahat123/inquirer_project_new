import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'what is your name?'
    },
    {
        type: 'number',
        name: 'age',
        message: 'what is your Age?'
    },
    {
        type: 'list',
        name: 'Gender',
        message: 'what is your Gender?',
        choices:['Male', 'Female', 'Child']
    }
]);
 console.log('your name is: ' + answer.name + ', your age is: ' + answer.age + '  your Gender is: ' + answer.Gender)














