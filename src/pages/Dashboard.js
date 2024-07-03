import React, { useEffect } from 'react'
import * as FormAxiosService from "../api/FormAxiosService"
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"

function Dashboard() {

    useEffect(() => {
        getPersonalDetails(9000000001);
    }, []);

    const getPersonalDetails = async (mobile) => {
        try {
            const response = await FormAxiosService.getPersonalDetails(mobile);
            if(response != null) {
                console.log("user personal data : ", response);
            } else {
                console.log("Response is NULL while fetching user personal data for mobile : ", mobile);
            }
        } catch (error) {
            console.error("Error while fetching user personal details : ", error);
        }
    }

  return (
    <div>
      <p>Welcome to Dashboard</p>
    </div>
  )
}

export default Dashboard
