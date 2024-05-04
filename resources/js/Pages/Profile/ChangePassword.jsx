import { useRef } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

export default function UpdatePasswordForm() {
    const{user} = usePage().props;
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <Layout>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h4>Reset Password</h4>
                            </div>
                            <div className="card-body">
                                {recentlySuccessful && (
                                    <div className="alert alert-success">
                                        Password successfully updated.
                                    </div>
                                )}
                                <form onSubmit={updatePassword}>
                                    <div className="form-group">
                                        <label htmlFor="password">Current Password</label>
                                        <input
                                            id="email"
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            tabIndex={1}
                                            required
                                            autofocus
                                            ref={currentPasswordInput}
                                            value={data.current_password}
                                            onChange={(e) => setData('current_password', e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">
                                            New Password
                                        </label>
                                        <input
                                            id="password"
                                            type="password"
                                            className="form-control pwstrength"
                                            data-indicator="pwindicator"
                                            name="password"
                                            tabIndex={2}
                                            required
                                            ref={passwordInput}
                                            value={data.password}
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
                                        <label htmlFor="password-confirm">
                                            Confirm Password
                                        </label>
                                        <input
                                            id="password-confirm"
                                            type="password"
                                            className="form-control"
                                            name="confirm-password"
                                            tabIndex={2}
                                            required
                                            value={data.password_confirmation}
                                            onChange={(e) => setData('password_confirmation', e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg"
                                            tabIndex={4}
                                        >
                                            Reset Password
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Layout>
    );
}
