import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import { useEffect } from "react";
// import feather from 'feather-icons';

export default function Layout({ children }) {
    useEffect(() => {
        feather.replace();
    }, []);
    return (
        <div id="app">
            <div className="main-wrapper main-wrapper-1">
                <div className="navbar-bg" />
                <Header></Header>
                <Sidebar></Sidebar>
                {/* Main Content */}
                <div className="main-content">
                    {children}
                    <div className="settingSidebar">
                        <a
                            href="javascript:void(0)"
                            className="settingPanelToggle"
                        >
                            {" "}
                            <i className="fa fa-spin fa-cog" />
                        </a>
                        <div className="settingSidebar-body ps-container ps-theme-default">
                            <div className=" fade show active">
                                <div className="setting-panel-header">
                                    Setting Panel
                                </div>
                                <div className="p-15 border-bottom">
                                    <h6 className="font-medium m-b-10">
                                        Select Layout
                                    </h6>
                                    <div className="selectgroup layout-color w-50">
                                        <label className="selectgroup-item">
                                            <input
                                                type="radio"
                                                name="value"
                                                defaultValue={1}
                                                className="selectgroup-input-radio select-layout"
                                                defaultChecked
                                            />
                                            <span className="selectgroup-button">
                                                Light
                                            </span>
                                        </label>
                                        <label className="selectgroup-item">
                                            <input
                                                type="radio"
                                                name="value"
                                                defaultValue={2}
                                                className="selectgroup-input-radio select-layout"
                                            />
                                            <span className="selectgroup-button">
                                                Dark
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="p-15 border-bottom">
                                    <h6 className="font-medium m-b-10">
                                        Sidebar Color
                                    </h6>
                                    <div className="selectgroup selectgroup-pills sidebar-color">
                                        <label className="selectgroup-item">
                                            <input
                                                type="radio"
                                                name="icon-input"
                                                defaultValue={1}
                                                className="selectgroup-input select-sidebar"
                                            />
                                            <span
                                                className="selectgroup-button selectgroup-button-icon"
                                                data-toggle="tooltip"
                                                data-original-title="Light Sidebar"
                                            >
                                                <i className="fas fa-sun" />
                                            </span>
                                        </label>
                                        <label className="selectgroup-item">
                                            <input
                                                type="radio"
                                                name="icon-input"
                                                defaultValue={2}
                                                className="selectgroup-input select-sidebar"
                                                defaultChecked
                                            />
                                            <span
                                                className="selectgroup-button selectgroup-button-icon"
                                                data-toggle="tooltip"
                                                data-original-title="Dark Sidebar"
                                            >
                                                <i className="fas fa-moon" />
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="p-15 border-bottom">
                                    <h6 className="font-medium m-b-10">
                                        Color Theme
                                    </h6>
                                    <div className="theme-setting-options">
                                        <ul className="choose-theme list-unstyled mb-0">
                                            <li
                                                title="white"
                                                className="active"
                                            >
                                                <div className="white" />
                                            </li>
                                            <li title="cyan">
                                                <div className="cyan" />
                                            </li>
                                            <li title="black">
                                                <div className="black" />
                                            </li>
                                            <li title="purple">
                                                <div className="purple" />
                                            </li>
                                            <li title="orange">
                                                <div className="orange" />
                                            </li>
                                            <li title="green">
                                                <div className="green" />
                                            </li>
                                            <li title="red">
                                                <div className="red" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-15 border-bottom">
                                    <div className="theme-setting-options">
                                        <label className="m-b-0">
                                            <input
                                                type="checkbox"
                                                name="custom-switch-checkbox"
                                                className="custom-switch-input"
                                                id="mini_sidebar_setting"
                                            />
                                            <span className="custom-switch-indicator" />
                                            <span className="control-label p-l-10">
                                                Mini Sidebar
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="p-15 border-bottom">
                                    <div className="theme-setting-options">
                                        <label className="m-b-0">
                                            <input
                                                type="checkbox"
                                                name="custom-switch-checkbox"
                                                className="custom-switch-input"
                                                id="sticky_header_setting"
                                            />
                                            <span className="custom-switch-indicator" />
                                            <span className="control-label p-l-10">
                                                Sticky Header
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="mt-4 mb-4 p-3 align-center rt-sidebar-last-ele">
                                    <a
                                        href="#"
                                        className="btn btn-icon icon-left btn-primary btn-restore-theme"
                                    >
                                        <i className="fas fa-undo" /> Restore
                                        Default
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="main-footer">
                    <div className="footer-left">
                        <a href="templateshub.net">Templateshub</a>
                    </div>
                    <div className="footer-right"></div>
                </footer>
            </div>
        </div>
    );
}
