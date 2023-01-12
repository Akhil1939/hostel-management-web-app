import React from 'react';
import { MDBTextArea } from 'mdb-react-ui-kit'

export default function RegisterStudent() {
    return (

        <>
            <div className="form mt-4 needs-validation">
                <div className="form-title text-center fs-2 fw-bold">
                    <p>Student Registration</p>
                </div> 

                <div className="registration-form">
                    <div className="container">
                        <div class="mb-3 ">
                            <label for="formGroupExampleInput" class="form-label align-self-center fs-5">Full Name</label> &nbsp;&nbsp;
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="First Name    Middle Name   Last Name" />
                        </div>


                        <div className="date row mb-3">

                            <div class="from col ">
                                <label class="control-label align-self-center fs-5" for="Email">Enrollment No</label>&nbsp;&nbsp;
                                <input class="form-control" id="Email" name="email" placeholder="190210116013" type="email" validate />
                            </div>
                            <div class="from col ">
                                <label class="control-label align-self-center fs-5" for="inputGroupSelect01">Semester</label>&nbsp;&nbsp;
                                <select class="form-select" id="inputGroupSelect01">
                                    <option selected>1</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="3">4</option>
                                    <option value="3">5</option>
                                    <option value="3">6</option>
                                    <option value="3">7</option>
                                    <option value="3">8</option>
                                </select>
                            </div>
                        </div>

                        <div className="date row mb-3">

                            <div class="from col ">
                                <label class="control-label align-self-center fs-5" for="Email">Email</label>&nbsp;&nbsp;
                                <input class="form-control" id="Email" name="email" placeholder="abcd@gmail.com" type="email" validate />
                            </div>
                            <div class="from col ">
                                <label class="control-label align-self-center fs-5" for="date">Mobile No</label>&nbsp;&nbsp;
                                <input class="form-control" id="date" name="date" placeholder="10 Digit Mo." type="text" />
                            </div>
                        </div>

                        <div className="date row mb-3">

                            <div class="from col ">
                                <label class="control-label align-self-center fs-5" for="Email">Address</label>&nbsp;&nbsp;
                                <MDBTextArea label='Message' id='textAreaExample' rows={4} />
                            </div>
                            <div class="from col ">
                                <label class="control-label align-self-center fs-5" for="date">Gender</label>&nbsp;&nbsp;
                                <select class="form-select" id="inputGroupSelect01">
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className='date row my-3'>
                            <div className='title fs-4'>
                                <p>Guardian Info</p>
                                <hr />
                            </div>
                        </div>

                        <div className="date row mb-3">

                            <div class="from col">
                                <label class="control-label align-self-center fs-5" for="Pname">Parent's Name</label>&nbsp;&nbsp;
                                <input class="form-control" id="Pname" name="text" placeholder="Parent's Name" type="text" />
                            </div>
                            <div class="from col ">
                                <label class="control-label align-self-center fs-5" for="Pno.">Parent's Mo.</label>&nbsp;&nbsp;
                                <input class="form-control" id="Pno." placeholder="Parent's Mobile No." type="number" />
                            </div>
                        </div>
                        <div className="date row mb-3">
                            <div class="from col ">
                                <label class="control-label align-self-center fs-5" for="Pno.">Relation</label>&nbsp;&nbsp;
                                <input class="form-control" id="Pno." placeholder="Parent's Mobile No." type="text" />
                            </div>
                            <div class="from col ">
                                <label class="control-label align-self-center fs-5" for="Pno.">Email</label>&nbsp;&nbsp;
                                <input class="form-control" id="Pno." placeholder="Parent's Mobile No." type="email" />
                            </div>
                        </div>

                        <div className="date row mb-3">

                            <div class="from col">
                                <label class="control-label align-self-center fs-5" for="Pname">Parent's Name</label>&nbsp;&nbsp;
                                <input class="form-control" id="Pname" name="text" placeholder="Parent's Name" type="text" />
                            </div>
                            <div class="from col ">
                                <label class="control-label align-self-center fs-5" for="Pno.">Parent's Mo.</label>&nbsp;&nbsp;
                                <input class="form-control" id="Pno." placeholder="Parent's Mobile No." type="number" />
                            </div>
                        </div>
                        <div className="date row mb-3">
                            <div class="from col ">
                                <label class="control-label align-self-center fs-5" for="Pno.">Relation</label>&nbsp;&nbsp;
                                <input class="form-control" id="Pno." placeholder="Parent's Mobile No." type="text" />
                            </div>
                            <div class="from col ">
                                <label class="control-label align-self-center fs-5" for="Pno.">Email</label>&nbsp;&nbsp;
                                <input class="form-control" id="Pno." placeholder="Parent's Mobile No." type="email" />
                            </div>
                        </div>

                        <div className='date row my-3'>
                            <div className='title fs-4'>
                                <p>Hostel Info</p>
                                <hr />
                            </div>
                        </div>
                        <div className="date row mb-3">
                            <div class="from col ">
                                <label class="control-label align-self-center fs-5" for="Pno.">Room No</label>&nbsp;&nbsp;
                                <input class="form-control" id="Pno." placeholder="Parent's Mobile No." type="text" />
                            </div>
                            <div class="from col ">
                                <label class="control-label align-self-center fs-5" for="Pno.">Admission Date</label>&nbsp;&nbsp;
                                <input class="form-control" id="Pno." placeholder="Parent's Mobile No." type="date" />
                            </div>
                        </div>
                        
                        <div className="date row mb-3">
                            <div class="from col ">
                                <label class="control-label align-self-center fs-5" for="Pno.">Password</label>&nbsp;&nbsp;
                                <input class="form-control" id="Pno." placeholder="Parent's Mobile No." type="password" />
                            </div>
                            <div class="from col ">
                                <label class="control-label align-self-center fs-5" for="Pno.">Confirm Password</label>&nbsp;&nbsp;
                                <input class="form-control" id="Pno." placeholder="Parent's Mobile No." type="password" />
                            </div>
                        </div>
                        <div className="submit text-center">

                            <button type="submit" class="btn btn-outline-dark">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}