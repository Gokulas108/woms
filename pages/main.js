import React from 'react';
import { requireAuth } from "../hoc/auth";

export const getServerSideProps = requireAuth()

const main = ({user}) => {
    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Site to Site Migration</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Migration using PFIDs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
            </ul>
        </div>
    )
}

export default main
