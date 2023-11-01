# vemc-modal

## Description

A modal pluggin for react using `create-react-app`.

## Installation

Run the following command:

`npm install vemc-modal`

## How to use ?

**1 - Import the pluggin :**

`import {Modal} from "vemc-modal"`

**2 - Use this state :**

`const [displayModal, setDisplayModal] = useState(false)`

**3 - Return the modal :**

```
<Modal
    showModal={displayModal}
    hideModal={()=>setDisplayModal(false)}
    title="Enter your modal title here"
    message="Hello, your message here"
    buttonText1="Ok"
    buttonText2="Cancel"
/>
```
