import React from 'react'

export default function Nav() {
    return (
        <div>
            <nav class="navbar bg-light d-flex justify-content-between p-2">
                <div class="">
                    <a class="navbar-brand" href="#">
                        <img src="https://yt3.ggpht.com/ytc/AMLnZu-EN3f6M8KrH5fqTwV8lmO1wIeHwD_59hEtVurQ=s900-c-k-c0x00ffffff-no-rj" alt="Logo" width="120" height="120" class="" />
                    </a>
                </div>
                <div className="text fs-1">GEC Hostel</div>
                <div className="info">
                    <p>Name</p>
                    <p>ER</p>
                    <p><button type="button" class="btn btn-danger">Log out</button></p>
                </div>
            </nav>
        </div>
    )
}
