# react-modal

## Description

A modal pluggin for react using `create-react-app`.

## Installation

Run the following command:

`npm install pop-up-modal`

## How to use ?

**1 - Import the pluggin :**

`import {Modal} from "pop-up-modal"`

**2 - Use this state :**

`const [displayModal, setDisplayModal] = useState(false)`

**3 - Return the modal :**

```
<Modal
    showModal={displayModal}
    hideModal={()=>setDisplayModal(false)}
/>
```
