import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import StateForm from './chap04/StateForm';
import StateFormUC from './chap04/StateFormUC';
import StateForm from './chap04/StateForm';
import FormTextArea from './chap04/FormTextarea';
import FormSelect from './chap04/FormSelect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <StateForm />
    <StateFormUC />
    <FormTextArea />
    <FormSelect />
  </>
);
