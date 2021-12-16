import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Img from './images/hello.png';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';


function ContentArea(props) {

    const menuToggleFun = (e) => {
        // props.getClassName('active');
        // console.log(e, 'props');
        // e.target.classList.toggle('change');
        document.querySelector('aside').classList.add('active');
    }


    return (
        <div className='content_area'>
            <div className='hello_barbara'>
                {/* hamberger menu */}
                <div className="menu_container" onClick={menuToggleFun}>
                    <div className="menu_bar1"></div>
                    <div className="menu_bar2"></div>
                    <div className="menu_bar3"></div>
                </div>
                {/* hamberger menu */}
                <img src={Img} alt='hello-pic' />
            </div>
            <section>
                <div className='december'>
                    <div className='months_list'>
                        <div className='december_icons'>
                            <p className='december_2-8'>December 2-8</p>
                            <div className='arrows'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="less_then h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="greater_then h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='month'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Basic example"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider> */}
                        <span>Month</span>
                    </div>
                </div>
            </section>
            <section className='days'>
                <div className='day mon'>
                    <p>Mon</p>
                    <span className='count'>2</span>
                    <span></span>
                </div>
                <div className='day tue'>
                    <p>Tue</p>
                    <span className='count'>3</span>
                    <span></span>
                </div>
                <div className='day wed'>
                    <p>Wed</p>
                    <span className='count'>4</span>
                    <span></span>
                </div>
                <div className='day thu'>
                    <p>Thu</p>
                    <span className='count'>5</span>
                    <span></span>
                </div>
                <div className='day fri'>
                    <p>Fri</p>
                    <span className='count'>6</span>
                    <span></span>
                </div>
                <div className='day sat'>
                    <p>Sat</p>
                    <span className='count'>7</span>
                    <span></span>
                </div>
                <div className='day sun'>
                    <p>Sun</p>
                    <span className='count'>8</span>
                    <span></span>
                </div>
            </section>
            <section className='weekly_reports'>
                <div className='reports'>
                    <p className='weekly-reports'>Weekly Reports</p>
                    <div className='todya_week_month'>
                        <Button>Today</Button>
                        <Button className='black'>Week</Button>
                        <Button>Month</Button>
                    </div>
                </div>
                <div className='gb_reports'>
                    <div className='gb_wrapper'>
                        <div className='svg_wrapper'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </div>
                        <p className='gb_content'>System Junk</p>
                        <h3>35.2 GB</h3>
                    </div>
                    <div className='gb_wrapper'>
                        <div className='svg_wrapper'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                            </svg>
                        </div>
                        <p className='gb_content'>System Junk</p>
                        <h3>35 GB</h3>
                    </div>
                    <div className='gb_wrapper'>
                        <div className='svg_wrapper'>
                            <DeleteIcon> Delete</ DeleteIcon>
                        </div>
                        <p className='gb_content'>Trash Bins</p>
                        <h3>36.99 GB</h3>
                    </div>
                    <div className='gb_wrapper'>
                        <div className='svg_wrapper'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>
                        </div>
                        <p className='gb_content'>Phot Junk</p>
                        <h3>35.56 GB</h3>
                    </div>
                </div>
            </section>
            <section className='updating_monitoring'>
                <p className='updating'>Updating Monitoring</p>
                <div className='system_files'>
                    <div className='twenty_five twenty'>
                        <div className='system_content'>
                            <h4 className='my_heading'>System Files</h4>
                            <p>December 2021</p>
                        </div>
                        <div className="set-size charts-container">
                            <div className="pie-wrapper progress-45 progress-25 style-2">
                                <span className="label">25%</span>
                                <div className="pie">
                                    <div className="left-side half-circle half-25"></div>
                                    <div className="right-side half-circle"></div>
                                </div>
                                <div className="shadow"></div>
                            </div>
                        </div>
                    </div>
                    <div className='fifty twenty_five'>
                        <div className='system_content'>
                            <h4>Applications</h4>
                            <p>December 2020</p>
                        </div>

                        <div className="set-size charts-container">
                            <div className="pie-wrapper progress-45 style-2">
                                <span className="label">45%</span>
                                <div className="pie">
                                    <div className="left-side half-circle"></div>
                                    <div className="right-side half-circle"></div>
                                </div>
                                <div className="shadow"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContentArea
