import { Box, Card, Center, Flex, Grid, Table, } from '@mantine/core'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Profile() {
    const [userData, setUserData] = useState("");

    useEffect(() => {
        axios.get("https://app.eslrankspro.com/api/user/adminuserdetail/", {
            params: {
                email: 'singhashish1.sh@gmail.com',
            }
        })
            .then(response => {
                console.log(response?.data);
                setUserData(response?.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    console.log(userData);

    return (
        <>

         <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder style={{ background: "#29DCD1" }}>
                    <Table horizontalSpacing="lg" verticalSpacing="lg" fontSize="xl" >
                        <thead style={{
                            
                        }}>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Created</th>
                                <th>Subscription</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData?.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.created_at}</td>
                                    <td>{item.Subscription}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card>
            </Box> 

            

        </>
    )
}
