import React, { Fragment } from "react"
import { Outlet } from "react-router-dom"

const AccountLayout = () => {
    return (
        <Fragment>
            <Outlet />
        </Fragment>
    )
}

export default AccountLayout