import React from "react"
import { Field, Form } from "react-final-form"
import { epochDateConvert } from "@/utils"

const AddTrainForm = ({ onAddTrain, selectedDate }) => {
 const date = epochDateConvert(selectedDate, true)

 return (
  <Form
   initialValues={{ date}}
   onSubmit={onAddTrain}
   render={({ handleSubmit }) => (
    <form onSubmit={handleSubmit} className="AddTrainForm">
     <label>
      <span className="l_title">Training Lable:</span>
      <Field component="input" type="text" name="name" placeholder="Morning Run" autoComplete="false" required />
     </label>
     <label>
      <span className="l_title">Decription:</span>
      <Field component="textarea" type="text" name="description" required autoComplete="off" />
     </label>
     <label>
      <span className="l_title">Distance:</span>
      <Field component="input" type="number" name="distance" placeholder="5km..." required autoComplete="off" />
     </label>
     <div className="label">
      <span className="l_title">Date:</span>
      <Field component="input" type="date" name="date" required />
     </div>
     <label>
      <span className="l_title">Link (not required):</span>
      <Field component="input" type="text" name="link" placeholder="strava.com/?training=123" autoComplete="off" />
     </label>

     <button type="submit" className="btn_submit">
      Add Training
     </button>
    </form>
   )}
  />
 )
}

export default AddTrainForm
