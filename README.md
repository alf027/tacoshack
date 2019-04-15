
## Startup instructions

### Install nodejs

https://nodejs.org/en/download/ here is the link to the latest version

Navigate to the project directory in a terminal/cmd window and run

### `npm install`

Installs application packages

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


## Development Methodology 

### Tech Stack Used

I chose to use React for this assignment as Nicole mentioned on my phone interview that Simple Energy would be using React for the majority of the frontend work going forward. I haven't had the opportunity to write any react code in my current position (my current position uses Angularjs) but I thought this would be the perfect opportunity to learn!

## Components

### OrderWizard

The OrderWizard component is the the parent component that houses the TacoOptions and the OrderSummary Components.

It is responsible for taking data passed back to it via the TacoOptions components and building the tacoOrder as well as increasing or decreasing the current step.


### TacoOption

The TacoOption Component is a reusable component for building out a list of radio options for picking specifics about your taco order. This component requires several props to be passed to configure the component. 

```
next(function) - the callback function run when clicking the next button


prev(function) - the callback function run when clicking the previous button.


currentStep(int) - the current step the wizard is on.


renderStep(int) - the step you want the component to be rendered on.


options(array) - an array of type values and prices. This array will be mapped to the radio buttons
eg :

[{ type: "Taco", price: 7.99 }, { type: "Burrito", price: 8.99 }, { type: "Bowl", price: 6.99 } ]

optionName(string) - a string that describes the options eg 'salsa'
```

#### Error Messaging
I included some error messaging if the user does not select an option value. This error message utilizes the ```optionName``` prop to form an message to inform the user they need to select an option before continuing.

### OrderSummary

The OrderSummary component is responsible for displaying the completed taco order in line item format and iterates through the completed taco order to calculate the subtotal, tax, and total.  

It is configured by passing the following props:

```
completedOrder(array) - this is an array of all the option values and prices selected in the steps leading up to the completed order 


EG: [{ type: "Taco", price: 7.99 }, { type: 'Beef', price: 0.00}, { type: 'Habanero Devil Sauce', price: 0.00 }, { type: 'Drink', price: 1.25 }]


currentStep(int) - the current step the wizard is on.


prev(function) - the callback function run when clicking the previous button.
```

### Styling
I chose to use bootstrap for styling this project as that is what I'm familar with in my current role. I'm not completetly sold on bootstrap but I wanted to quickly be able to style the project and focus more on the react/component design of the project. 


### Final Thoughts
I had a blast doing this assignment and learned a ton.  React is super cool! If you have any questions feel free to reach out to me at alf027@gmail.com

Thanks for taking the time to look over my code! 

