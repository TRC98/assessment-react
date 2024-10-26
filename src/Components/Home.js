import React from 'react'
import { Link, Outlet, Route, Router, Routes, unstable_HistoryRouter } from 'react-router-dom'
import { Breadcrumb, Button, Col, Divider, Row } from 'antd'
import { fetchUserData } from './secondTask'

export default function Home() {
    
    const dd=()=>{
        let userIds = [1, 2, 3, 4, 5];
        fetchUserData(userIds);
    }
  return (
        <div>
            <div style={{textAlign:'center'}}>
                <h1>XM Developer - Assessment</h1>
                <h3>Rajitha Chamod</h3>
            </div>
            <Divider/>
            <Row>
                <Col span={12}>
                    <Row justify={'center'} style={{marginTop:'20px'}}>
                        <Link to="/palindrome">
                            <Button type="primary">Palindrome Check</Button>
                        </Link>
                    </Row>
                    <Row justify={'center'} style={{marginTop:'20px'}}>
                        <Link to="/flattenarray">
                            <Button type="primary">Flatten Nested Array</Button>
                        </Link>
                    </Row>
                    
                    <Row justify={'center'} style={{marginTop:'20px'}}>
                        {/* <Link to="/about"> */}
                            <Button type="primary" onClick={()=>{dd()}}>2nd Question Function</Button>
                        {/* </Link> */}
                    </Row>
                    
                </Col>
                <Col span={12}>
                    <Outlet></Outlet>
                </Col>
            </Row>
            
            
        </div>
        
  )
}
