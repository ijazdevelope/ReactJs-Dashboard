import React from 'react';
import Switch from '@mui/material/Switch';


function RightSideContent() {
    return (
        <div className='Right_Side_Content'>
            <div className='settings'>
                <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg></span>
                <span>
                    <img src='https://images.unsplash.com/photo-1639486226152-2a4464eda1ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' alt='header-icons' />
                </span>
            </div>
            <section className='other_functions'>
                <p className='paragraph'>Other Functions</p>
                <div className='card_wrapper'>
                    <div className='card'>
                        <div className='card_header'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                        </div>
                        <div className='card_footer'>
                            <p>Optimization</p>
                            <Switch defaultChecked />
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card_header'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                        </div>
                        <div className='card_footer'>
                            <p>Smart Scan</p>
                            <Switch color="default" defaultChecked />
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card_header'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                        </div>
                        <div className='card_footer'>
                            <p>Malware</p>
                            <Switch color="warning" defaultChecked />
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card_header'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                        </div>
                        <div className='card_footer'>
                            <p>Updater</p>
                            <Switch color="secondary" defaultChecked />
                        </div>
                    </div>
                </div>
                <p className='paragraph'>Statistics Of Cleaning</p>
                <div className='statistics_of_cleaning'>
                    <div className='child_wrapper'>
                        <div className='first_child'>
                            <p>CURRENT/FRIDAY</p>
                            <h4>58%</h4>
                        </div>
                        <div className='sec_child'>
                            <Switch defaultChecked />
                        </div>
                    </div>
                    <div class="progress_bar_wrapper">
                        <div className='progress_bar_parent'>
                            <div className='loadbar'>
                                <div className='bar bar1'></div>
                            </div>
                            <span class="progres_bar_days">MO</span>
                        </div>
                        <div className='progress_bar_parent'>
                            <div className='loadbar'>
                                <div className='bar bar2'></div>
                            </div>
                            <span class="progres_bar_days">TU</span>
                        </div>
                        <div className='progress_bar_parent'>
                            <div className='loadbar'>
                                <div className='bar bar3'></div>
                            </div>
                            <span class="progres_bar_days">WE</span>
                        </div>
                        <div className='progress_bar_parent'>
                            <div className='loadbar'>
                                <div className='bar bar4'></div>
                            </div>
                            <span class="progres_bar_days">TH</span>
                        </div>
                        <div className='progress_bar_parent'>
                            <div className='loadbar'>
                                <div className='bar bar5'></div>
                            </div>
                            <span class="progres_bar_days">FR</span>
                        </div>
                        <div className='progress_bar_parent'>
                            <div className='loadbar'>
                                <div className='bar bar6'></div>
                            </div>
                            <span class="progres_bar_days">SA</span>
                        </div>
                        <div className='progress_bar_parent'>
                            <div className='loadbar'>
                                <div className='bar bar7'></div>
                            </div>
                            <span class="progres_bar_days">SU</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RightSideContent
