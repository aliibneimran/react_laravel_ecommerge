import Layout from "@/Layouts/Layout";
import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function User() {
    const{users} = usePage().props;
    console.log(users);
    return (
        <Layout>
            <section className="section">
                <div className="section-body">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Export Table</h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table
                                            className="table table-striped table-hover"
                                            id="tableExport"
                                            style={{ width: "100%" }}
                                        >
                                            <thead>
                                                <tr>
                                                    <th>SI</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>User Type</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {users.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    {item.usertype === 1 ? "Admin" : item.usertype === 2 ? "Moderator" : "User"}
                                                    <td>
                                                        <Link href="">Edit</Link>
                                                    </td>
                                                </tr>
                                            ))}
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
