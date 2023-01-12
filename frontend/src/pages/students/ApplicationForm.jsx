import React from 'react';
import './Students.css'
export default function ApplicationForm() {
    return (
        <>
            <div className="form mt-4">
                <div className="form-title text-center fs-2 fw-bold">
                    <p>New Leave Application</p>
                </div>
                <div className="application-form">
                    <div className="container">

                        <div class="mb-3 ">
                            <label class="form-label align-self-center fs-5">Subject</label> &nbsp;&nbsp;
                            <input
                                type="text"
                                class="form-control"
                                id="subject"
                                name='subject'
                                placeholder="Reason of leave" />
                        </div>
                        <div className="date row mb-3">

                            <div class="from col ">
                                <label class="control-label align-self-center fs-5">From</label>&nbsp;&nbsp;
                                <input class="form-control" id="date" name="from" placeholder="MM/DD/YYYY" type="text" />
                            </div>
                            <div class="from col ">
                                <label class="control-label align-self-center fs-5" for="date">To</label>&nbsp;&nbsp;
                                <input class="form-control" id="date" name="to" placeholder="MM/DD/YYYY" type="text" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label align-self-center fs-5 start-0" style={{ width: "90px" }}>Going to</label> &nbsp;&nbsp;
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="City or Town you are going" />
                        </div>

                       

                            <div className="roommate-info row mb-3">
                                <div class="from col">
                                    <label class="control-label align-self-center fs-5" for="Rname">Roommate Name</label>&nbsp;&nbsp;
                                    <input class="form-control" id="Rname" name="text" placeholder="Roommate Name" type="text" />
                                </div>
                                <div class="from col ">
                                    <label class="control-label align-self-center fs-5" for="Rno">Roommate Mo.</label>&nbsp;&nbsp;
                                    <input class="form-control" id="Rno" name="number" placeholder="Roommate Mobile No." type="text" />
                                </div>
                            </div>
                       
                        <div className="parents-info row mb-3">

                            <div class="from col">
                                <label class="control-label align-self-center fs-5" for="Pname">Parent's Name</label>&nbsp;&nbsp;
                                <input class="form-control" id="Pname" name="text" placeholder="Parent's Name" type="text" />
                            </div>
                            <div class="from col ">
                                <label class="control-label align-self-center fs-5" for="Pno.">Parent's Mo.</label>&nbsp;&nbsp;
                                <input class="form-control" id="Pno." placeholder="Parent's Mobile No." type="number" />
                            </div>
                        </div>
                        <div className="tr">
                            <label class="control-label align-self-center fs-5" for="Pno.">Going Through</label>&nbsp;&nbsp;
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>Bus</option>
                                <option value="1">Train</option>
                                <option value="2">Plain</option>
                                <option value="3">Custom</option>
                            </select>
                        </div>
                        <div className="submit text-center">

                            <button type="submit" class="btn btn-outline-dark">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
