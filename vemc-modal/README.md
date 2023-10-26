# vemc-modal

## Description

A modal pluggin for react using `create-react-app`.

## Installation

Run the following command:

`npm install vemc-modal`

## How to use ?

**1 - Import the pluggin :**

`import {Modal} from "modal"`

**2 - Use this state :**

`const [displayModal, setDisplayModal] = useState(false)`

**3 - Return the modal :**

```
<Modal
    modalStyle={modalStyle}
    modalHeaderStyle={modalHeaderStyle}
    titleStyle={titleStyle}
    modalBodyStyle={modalBodyStyle}
    modalFooterStyle={modalFooterStyle}
    xButtonStyle={xButtonStyle}
    footerButton1Style={footerButton1Style}
    footerButton2Style={footerButton2Style}
    title="Enter your modal title here"
    message="Hello, your message here"
    buttonText1="Ok"
    buttonText2="Cancel"
    showModal={displayModal}
    hideModal={()=>setDisplayModal(false)}
/>
```
