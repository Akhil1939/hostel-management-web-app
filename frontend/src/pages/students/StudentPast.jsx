import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBIcon
} from 'mdb-react-ui-kit';

export default function StudentPast() {
    return (
        <>
            <div className='m-4 d-flex flex-wrap justify-content-between'>

                <MDBCard alignment='center ' className='m-2' style={{ width: "350px" }}>
                    <MDBCardHeader>subject lorem26</MDBCardHeader>
                    <MDBCardBody className='p-1'>
                        <MDBRow evenly>
                            <MDBCol >
                                from : 12/12/2022
                            </MDBCol>
                            <MDBCol>
                                TO : 12/1/2023
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                    <MDBCardBody className='text-danger text-start'>
                        <MDBCardTitle>Remarks</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter className=''>
                        <MDBRow evenly className='d-flex justify-content-between'>
                            <MDBCol >
                                <MDBCardText className='text-muted'>2 days ago</MDBCardText>
                            </MDBCol>
                            <MDBCol className=''>
                                <MDBBtn outline color='success'>
                                <MDBCardText>
                           Approved
                        </MDBCardText>
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardFooter>

                </MDBCard>





            </div>

        </>
    );
}
