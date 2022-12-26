import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import './WardenPendingCard.css'
export default function WardenPendingCard() {
  const [centredModal, setCentredModal] = useState(false);
  const [remark, setRemark] = ("")

  const toggleShow = () => { setCentredModal(!centredModal) }

  const addRemark = (remark) => {

  }



  return (
    <>
      <MDBCard className='mx-3 my-2'>
        <div className="d-flex justify-content-between">
          <MDBCardHeader>subject of leave</MDBCardHeader>
          <MDBBtn outline className='mx-2' color='dark'>
            b007
          </MDBBtn>
        </div>
        <MDBCardBody>
          <div className="">

            <MDBCardTitle>Akhil Hareshbhai Kukadiya</MDBCardTitle>
            <MDBCardTitle>Enroll.190210116033</MDBCardTitle>
          </div>
          <div className="d-flex justify-content-between">

            <MDBCardTitle>From : 15/15/1515</MDBCardTitle> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <MDBCardTitle>To : 16/16/1616</MDBCardTitle>
          </div>
          <MDBCardText style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "webkitBox",
            webkitLineClamp: "2",
            webkitBoxOrient: "vertical"
          }}></MDBCardText>
          <div className="footer text-center">

            <MDBBtn onClick={toggleShow}>View</MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>





      <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>

            <div className="d-flex justify-content-between">
              <MDBCardHeader><b>subject of leave</b></MDBCardHeader>
              <MDBBtn outline className='mx-2 mt-1' color='dark'>
                b007
              </MDBBtn>
            </div>


            <MDBModalBody>
              <div className="inner-data-name d-flex justify-content-between">

                <MDBCardTitle>Akhil Hareshbhai Kukadiya</MDBCardTitle>
                <MDBCardTitle>Er.190210116033</MDBCardTitle>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>
                  <b>From : </b> 15/15/1515

                </p>
                <p>
                  <b>To : </b> 15/15/1515
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p>
                  <b>Going to : </b> Home

                </p>
                <p>
                  <b>Through : </b> custom
                </p>
              </div>
              <hr />

              <div className="d-flex justify-content-between">

                <MDBCardTitle>Parent's Mo. 9874563210</MDBCardTitle>

              </div>

              <hr />
              <div className='update-card d-flex justify-content-between'>
<div className="dropdown-status">

                <select className="form-select border  border-dark" id="validationCustom0" >
                  <option selected="selected" value="--SELECT--">Update-Status</option>
                  <option value="approve">--Approve--</option>
                  <option value="reject">--Reject--</option>
                </select>
</div>
                <form>
                  <div className='remark d-flex'>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Remarks"
                      value={remark}
                      onChange={e => setRemark(e.target.value)} />

                  </div>
                </form>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Submit
              </MDBBtn>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
