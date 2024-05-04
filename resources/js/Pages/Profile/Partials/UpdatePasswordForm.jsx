import { useRef } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdatePasswordForm({ className = '' }) {
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
        <section className="section">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h4>Reset Password</h4>
                            </div>
                            <div className="card-body">
                                <p className="text-muted">
                                    Enter Your New Password
                                </p>
                                <form method="POST">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            tabIndex={1}
                                            required
                                            autofocus
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
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg btn-block"
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
    );
}
