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

export default function StudentPending() {
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
                    <MDBCardFooter className=''>
                        <MDBRow evenly className='d-flex justify-content-between'>
                            <MDBCol >
                                <MDBCardText className='text-muted'>2 days ago</MDBCardText>
                            </MDBCol>
                            <MDBCol className=''>
                                <MDBBtn outline color='danger'>
                                    <MDBIcon fas icon="trash-alt" />
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardFooter>

                </MDBCard>





            </div>

        </>
    );
}
