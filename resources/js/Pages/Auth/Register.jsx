import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <section className="section">
            <div className="container mt-5 w-50">
                <div className="row">
                    <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h4>Register</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={data.name}
                                            autofocus
                                            required
                                            onChange={(e) => setData('name', e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={data.email}
                                            required
                                            onChange={(e) => setData('email', e.target.value)}
                                        />
                                        <div className="invalid-feedback"></div>
                                    </div>
                                    <div className="form-group">
                                        <label
                                            htmlFor="password"
                                            className="d-block"
                                        >
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            type="password"
                                            className="form-control pwstrength"
                                            data-indicator="pwindicator"
                                            name="password"
                                            value={data.password}
                                            required
                                            onChange={(e) => setData('password', e.target.value)}
                                        />
                                        <div
                                            id="pwindicator"
                                            className="pwindicator"
                                        >
                                            <div className="bar" />
                                            <div className="label" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label
                                            htmlFor="password2"
                                            className="d-block"
                                        >
                                            Password Confirmation
                                        </label>
                                        <input
                                            id="password2"
                                            type="password"
                                            className="form-control"
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            required
                                            onChange={(e) => setData('password_confirmation', e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                name="agree"
                                                className="custom-control-input"
                                                id="agree"
                                            />
                                            <label
                                                className="custom-control-label"
                                                htmlFor="agree"
                                            >
                                                I agree with the terms and
                                                conditions
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg btn-block"
                                            disabled={processing}
                                        >
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="mb-4 text-muted text-center">
                                Already Registered?{" "}
                                <Link href={route('login')}>Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
