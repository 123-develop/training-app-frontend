import React from "react"
import EditTrainForm from "./EditTrainForm"
import { useDispatch, useSelector } from "react-redux"
import { updateEvent } from "@/redux/actions/event-actions"

const EditTrainPopup = ({ isEditMode, toggleEdit }) => {
 const d = useDispatch()
 const { currentObj } = useSelector(({ app }) => ({
  currentObj: app.currentObj,
 }))

 const onEditTrain = (data) => {
  d(updateEvent(data))
 }
 
 return (
  <div className={`modal modal_createnew ${isEditMode ? "modal_open" : "modal_close"}`}>
   <div className="modal_content">
    <h1 className="modal_title">Edit Training</h1>
    <EditTrainForm {...{ currentObj, onEditTrain }} />
    <button type="button" className="btn_submit btn_submit__delete">
     Delete Training
    </button>
    <button onClick={toggleEdit} className="btn_close">
     close
    </button>
   </div>
  </div>
 )
}

export default EditTrainPopup