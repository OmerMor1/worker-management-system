import React from 'react'
import SideNav from '../../components/SideNav/SideNav'
import EmployeeControlTable from './Shared/EmployeesControlTable/EmployeeControlTable'

export const ManageEmployees = () => {
  return (
    <>
      <SideNav />
      <div style={{ marginLeft: '240px' }}> 
      <EmployeeControlTable />
    </div>
    </>
  )
}
