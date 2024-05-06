import Layout from "@/Layouts/Layout";
import { usePage } from "@inertiajs/react";
import React from "react";

export default function UserEdit() {
    const { user } = usePage().props;
    console.log(user);
    return (
        <Layout>
            <div className="card">
                <div className="card-header">
                    <h4>User Edit</h4>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            value={user.name}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={user.email}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>User Type</label>
                        <select value={user.userType} className="form-control">
                            <option value="1">Admin</option>
                            <option value="2">Editor</option>
                            <option value="3">User</option>
                        </select>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-primary mr-1" type="submit">
                        Submit
                    </button>
                </div>
            </div>
        </Layout>
    );
}
