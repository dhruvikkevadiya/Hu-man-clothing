import React, { useState } from 'react';
import Arrow from "../assets/images/arrow.png"
import Mainbannerimg from "../assets/images/index-main-banner-img.png"
import Taxconsultantimg from "../assets/images/we-are-tax-consultant-img.png"
import Twowheelericon from "../assets/images/two-wheeler-loan-icon.png"
import Recurringdepositeicon from "../assets/images/recurring-deposit-icon.png"
import Personalloanicon from "../assets/images/personal-loan-icon.png"
import Fixeddepositeicon from "../assets/images/fixed-deposit-icon.png"
import Goldloanicon from "../assets/images/gold-loan-icon.png"
import Businessloanicon from "../assets/images/business-loan-icon.png"
import Passengervehicleicon from "../assets/images/passenger-vehicle-icon.png"
import Fuelfinanceicon from "../assets/images/fuel-finance-icon.png"
import Tollfinanceicon from "../assets/images/toll-finance-icon.png"
import Challanicon from "../assets/images/challan-discounting-icon.png"
import Testimoniallogo from "../assets/images/testimonial-logo.png"
import Contactusimg from "../assets/images/contact-us-img.png"
import Testimonialimg1 from "../assets/images/testimonial-img-1.png"
import Testimonialimg2 from "../assets/images/testimonial-img-2.png"
import Testimonialimg3 from "../assets/images/testimonial-img-3.png"
import Testimonialimg4 from "../assets/images/testimonial-img-4.png"
import Testimonialimg5 from "../assets/images/testimonial-img-5.png"
import Testimonialimg6 from "../assets/images/testimonial-img-6.png"
import { Tab, Tabs } from 'react-bootstrap'
import Slider from "react-slick";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/partners-1.png'
import img2 from '../assets/images/partners-2.png'
import img3 from '../assets/images/partners-3.png'
import img4 from '../assets/images/partners-4.png'
import img5 from '../assets/images/partners-5.png'
import img6 from '../assets/images/partners-6.png'
import img7 from '../assets/images/partners-7.png'
import img8 from '../assets/images/partners-8.png'
import img9 from '../assets/images/partners-9.png'
import img10 from '../assets/images/partners-10.png'
import img11 from '../assets/images/partners-11.png'
import img12 from '../assets/images/partners-12.png'
import img13 from '../assets/images/partners-13.png'
import img14 from '../assets/images/partners-14.png'
import img15 from '../assets/images/partners-15.png'
import img16 from '../assets/images/partners-16.png'
import img17 from '../assets/images/partners-17.png'
import img18 from '../assets/images/partners-18.png'
import img19 from '../assets/images/partners-19.png'
import img20 from '../assets/images/partners-20.png'
import img21 from '../assets/images/partners-21.png'
import img22 from '../assets/images/partners-22.png'
import img23 from '../assets/images/partners-23.png'
import img24 from '../assets/images/partners-24.png'
import img25 from '../assets/images/partners-25.png'
import img26 from '../assets/images/partners-26.png'
import img27 from '../assets/images/partners-27.png'
import img28 from '../assets/images/partners-28.png'
import img29 from '../assets/images/partners-29.png'
import img30 from '../assets/images/partners-30.png'
import img31 from '../assets/images/partners-31.png'
import img32 from '../assets/images/partners-32.png'
import img33 from '../assets/images/partners-33.png'
import img34 from '../assets/images/partners-34.png'
import img35 from '../assets/images/partners-35.png'
import img36 from '../assets/images/partners-36.png'
import img37 from '../assets/images/partners-37.png'
import img38 from '../assets/images/partners-38.png'
import img39 from '../assets/images/partners-39.png'
import img40 from '../assets/images/partners-40.png'
import img41 from '../assets/images/partners-41.png'
import img42 from '../assets/images/partners-42.png'
import img43 from '../assets/images/partners-43.png'
import img44 from '../assets/images/partners-44.png'
import img45 from '../assets/images/partners-45.png'
import img46 from '../assets/images/partners-46.png'
import img47 from '../assets/images/partners-47.png'
import img48 from '../assets/images/partners-48.png'
import img49 from '../assets/images/partners-49.png'
import img50 from '../assets/images/partners-50.png'
import img51 from '../assets/images/partners-51.png'
import img52 from '../assets/images/partners-52.png'
import home1 from '../assets/images/home-1.png'
import home2 from '../assets/images/home-2.png'
import home3 from '../assets/images/home-3.png'
import home4 from '../assets/images/home-4.png'
import home5 from '../assets/images/home-5.png'
import home6 from '../assets/images/home-6.png'
import home7 from '../assets/images/home-7.png'
import home8 from '../assets/images/home-8.png'
import home9 from '../assets/images/home-9.png'
import home10 from '../assets/images/home-10.png'
import home11 from '../assets/images/home-11.png'
import home12 from '../assets/images/home-12.png'
import home13 from '../assets/images/home-13.png'
import home14 from '../assets/images/home-14.png'
import home15 from '../assets/images/home-15.png'
import home16 from '../assets/images/home-16.png'
import home17 from '../assets/images/home-17.png'
import home18 from '../assets/images/home-18.png'
import home19 from '../assets/images/home-19.png'
import home20 from '../assets/images/home-20.png'
import home21 from '../assets/images/home-21.png'
import home22 from '../assets/images/home-22.png'
import home23 from '../assets/images/home-23.png'
import home24 from '../assets/images/home-24.png'
import home25 from '../assets/images/home-25.png'
import home26 from '../assets/images/home-26.png'
import home27 from '../assets/images/home-27.png'
import home28 from '../assets/images/home-28.png'
import home29 from '../assets/images/home-29.png'
import home30 from '../assets/images/home-30.png'
import home31 from '../assets/images/home-31.png'
import home32 from '../assets/images/home-32.png'
import home33 from '../assets/images/home-33.png'
import home34 from '../assets/images/home-34.png'
import home35 from '../assets/images/home-35.png'
import home36 from '../assets/images/home-36.png'
import home37 from '../assets/images/home-37.png'
import home38 from '../assets/images/home-38.png'
import home39 from '../assets/images/home-39.png'
import home40 from '../assets/images/home-40.png'
import home41 from '../assets/images/home-41.png'
import home42 from '../assets/images/home-42.png'
import home43 from '../assets/images/home-43.png'
import home44 from '../assets/images/home-44.png'
import home45 from '../assets/images/home-45.png'
import home46 from '../assets/images/home-46.png'
import home47 from '../assets/images/home-47.png'
import home48 from '../assets/images/home-48.png'
import home49 from '../assets/images/home-49.png'
import home50 from '../assets/images/home-50.png'
import home51 from '../assets/images/home-51.png'
import home52 from '../assets/images/home-52.png'
import loan1 from '../assets/images/loan-1.png'
import loan2 from '../assets/images/loan-2.png'
import loan3 from '../assets/images/loan-3.png'
import loan4 from '../assets/images/loan-4.png'
import loan5 from '../assets/images/loan-5.png'
import loan6 from '../assets/images/loan-6.png'
import loan7 from '../assets/images/loan-7.png'
import loan8 from '../assets/images/loan-8.png'
import loan9 from '../assets/images/loan-9.png'
import loan10 from '../assets/images/loan-10.png'
import loan11 from '../assets/images/loan-11.png'
import loan12 from '../assets/images/loan-12.png'
import loan13 from '../assets/images/loan-13.png'
import loan14 from '../assets/images/loan-14.png'
import loan15 from '../assets/images/loan-15.png'
import loan16 from '../assets/images/loan-16.png'
import loan17 from '../assets/images/loan-17.png'
import loan18 from '../assets/images/loan-18.png'
import loan19 from '../assets/images/loan-19.png'
import loan20 from '../assets/images/loan-20.png'
import loan21 from '../assets/images/loan-21.png'
import loan22 from '../assets/images/loan-22.png'
import loan23 from '../assets/images/loan-23.png'
import loan24 from '../assets/images/loan-24.png'
import loan25 from '../assets/images/loan-25.png'
import loan26 from '../assets/images/loan-26.png'
import loan27 from '../assets/images/loan-27.png'
import loan28 from '../assets/images/loan-28.png'
import loan29 from '../assets/images/loan-29.png'
import loan30 from '../assets/images/loan-30.png'
import loan31 from '../assets/images/loan-31.png'
import loan32 from '../assets/images/loan-32.png'
import loan33 from '../assets/images/loan-33.png'
import loan34 from '../assets/images/loan-34.png'
import loan35 from '../assets/images/loan-35.png'
import loan36 from '../assets/images/loan-36.png'
import loan37 from '../assets/images/loan-37.png'
import loan38 from '../assets/images/loan-38.png'
import loan39 from '../assets/images/loan-39.png'
import loan40 from '../assets/images/loan-40.png'
import loan41 from '../assets/images/loan-41.png'
import loan42 from '../assets/images/loan-42.png'
import loan43 from '../assets/images/loan-43.png'
import loan44 from '../assets/images/loan-44.png'
import loan45 from '../assets/images/loan-45.png'
import loan46 from '../assets/images/loan-46.png'
import loan47 from '../assets/images/loan-47.png'
import loan48 from '../assets/images/loan-48.png'
import loan49 from '../assets/images/loan-49.png'
import loan50 from '../assets/images/loan-50.png'
import business1 from '../assets/images/businessl-1.png'
import business2 from '../assets/images/businessl-2.png'
import business3 from '../assets/images/businessl-3.png'
import business4 from '../assets/images/businessl-4.png'
import business5 from '../assets/images/businessl-5.png'
import business6 from '../assets/images/businessl-6.png'
import business7 from '../assets/images/businessl-7.png'
import business8 from '../assets/images/businessl-8.png'
import business9 from '../assets/images/businessl-9.png'
import business10 from '../assets/images/businessl-10.png'
import business11 from '../assets/images/businessl-11.png'
import business12 from '../assets/images/businessl-12.png'
import business13 from '../assets/images/businessl-12.png'
import business14 from '../assets/images/businessl-14.png'
import business15 from '../assets/images/businessl-15.png'
import business16 from '../assets/images/businessl-16.png'
import business17 from '../assets/images/businessl-17.png'
import business18 from '../assets/images/businessl-18.png'
import business19 from '../assets/images/businessl-19.png'
import business20 from '../assets/images/businessl-20.png'
import business21 from '../assets/images/businessl-21.png'
import business22 from '../assets/images/businessl-22.png'
import business23 from '../assets/images/businessl-23.png'
import business24 from '../assets/images/businessl-24.png'
import business25 from '../assets/images/businessl-25.png'
import business26 from '../assets/images/businessl-26.png'
import business27 from '../assets/images/businessl-27.png'
import business28 from '../assets/images/businessl-28.png'
import business29 from '../assets/images/businessl-29.png'
import business30 from '../assets/images/businessl-30.png'
import business31 from '../assets/images/businessl-31.png'
import business32 from '../assets/images/businessl-32.png'
import business33 from '../assets/images/businessl-33.png'
import business34 from '../assets/images/businessl-34.png'
import business35 from '../assets/images/businessl-35.png'
import business36 from '../assets/images/businessl-36.png'
import business37 from '../assets/images/businessl-37.png'
import business38 from '../assets/images/businessl-38.png'
import business39 from '../assets/images/businessl-39.png'
import business40 from '../assets/images/businessl-40.png'
import business41 from '../assets/images/businessl-41.png'
import business42 from '../assets/images/businessl-42.png'
import business43 from '../assets/images/businessl-43.png'
import business44 from '../assets/images/businessl-44.png'
import business45 from '../assets/images/businessl-45.png'
import business46 from '../assets/images/businessl-46.png'
import business47 from '../assets/images/businessl-47.png'
import business48 from '../assets/images/businessl-48.png'
import business49 from '../assets/images/businessl-49.png'
import business50 from '../assets/images/businessl-50.png'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

export default function Index() {

    const settingsslider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event) => {
        const inputPhoneNumber = event.target.value;

        const numericPhoneNumber = inputPhoneNumber.replace(/\D/g, '');

        if (numericPhoneNumber.length <= 10) {
            setPhoneNumber(numericPhoneNumber);
        }
    };

    const options = {
        items: 3, // Number of items to display at once
        loop: true, // Infinite loop
        margin: 10, // Space between items
        nav: false, // Display navigation buttons
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            766: {
                items: 2,
                nav: false,
            },
            1200: {
                items: 3,
                nav: false,
            }
        }
    };
    const personalbox = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }, { img: img5 }, { img: img6, }, { img: img7 }, { img: img8 }, { img: img9 }, { img: img10 }, { img: img11 }, { img: img12 }, { img: img13 }, { img: img14 }, { img: img15 }, { img: img16 }, { img: img17 }, { img: img18 }, { img: img19 }, { img: img20 }, { img: img21 }, { img: img22 }, { img: img23 }, { img: img24 }, { img: img25 }, { img: img26 }, { img: img27 }, { img: img28 }, { img: img29 }, { img: img30 }, { img: img31 }, { img: img32 }, { img: img33 }, { img: img34 }, { img: img35 }, { img: img36 }, { img: img37 }, { img: img38 }, { img: img39 }, { img: img40 }, { img: img41 }, { img: img42 }, { img: img43 }, { img: img44 }, { img: img45 }, { img: img46 }, { img: img47 }, { img: img48 }, { img: img49 }, { img: img50 }, { img: img51 }, { img: img52 }]

    const homebox = [{ img: home1 }, { img: home2 }, { img: home3 }, { img: home4 }, { img: home5 }, { img: home6 }, { img: home7 }, { img: home8 }, { img: home9 }, { img: home10 }, { img: home11 }, { img: home12 }, { img: home13 }, { img: home14 }, { img: home15 }, { img: home16 }, { img: home17 }, { img: home18 }, { img: home19 }, { img: home20 }, { img: home21 }, { img: home22 }, { img: home23 }, { img: home24 }, { img: home25 }, { img: home26 }, { img: home27 }, { img: home28 }, { img: home29 }, { img: home30 }, { img: home31 }, { img: home32 }, { img: home33 }, { img: home34 }, { img: home35 }, { img: home36 }, { img: home37 }, { img: home38 }, { img: home39 }, { img: home40 }, { img: home41 }, { img: home42 }, { img: home43 }, { img: home44 }, { img: home45 }, { img: home46 }, { img: home47 }, { img: home48 }, { img: home49 }, { img: home50 }, { img: home51 }, { img: home52 }]

    const loanbox = [{ img: loan1 }, { img: loan2 }, { img: loan3 }, { img: loan4 }, { img: loan5 }, { img: loan6 }, { img: loan7 }, { img: loan8 }, { img: loan9 }, { img: loan10 }, { img: loan11 }, { img: loan12 }, { img: loan13 }, { img: loan14 }, { img: loan15 }, { img: loan16 }, { img: loan17 }, { img: loan18 }, { img: loan19 }, { img: loan20 }, { img: loan21 }, { img: loan22 }, { img: loan23 }, { img: loan24 }, { img: loan25 }, { img: loan26 }, { img: loan27 }, { img: loan28 }, { img: loan29 }, { img: loan30 }, { img: loan31 }, { img: loan32 }, { img: loan33 }, { img: loan34 }, { img: loan35 }, { img: loan36 }, { img: loan37 }, { img: loan38 }, { img: loan39 }, { img: loan40 }, { img: loan41 }, { img: loan42 }, { img: loan43 }, { img: loan44 }, { img: loan45 }, { img: loan46 }, { img: loan47 }, { img: loan48 }, { img: loan49 }, { img: loan50 }]

    const businessbox = [{ img: business1 }, { img: business2 }, { img: business3 }, { img: business4 }, { img: business5 }, { img: business6 }, { img: business7 }, { img: business8 }, { img: business9 }, { img: business10 }, { img: business11 }, { img: business12 }, { img: business13 }, { img: business14 }, { img: business15 }, { img: business16 }, { img: business17 }, { img: business18 }, { img: business19 }, { img: business20 }, { img: business21 }, { img: business22 }, { img: business23 }, { img: business24 }, { img: business25 }, { img: business26 }, { img: business27 }, { img: business28 }, { img: business29 }, { img: business30 }, { img: business31 }, { img: business32 }, { img: business33 }, { img: business34 }, { img: business35 }, { img: business36 }, { img: business37 }, { img: business38 }, { img: business39 }, { img: business40 }, { img: business41 }, { img: business42 }, { img: business43 }, { img: business44 }, { img: business45 }, { img: business46 }, { img: business47 }, { img: business48 }, { img: business49 }, { img: business50 }]

    const [loanValue, setLoanValue] = useState(500000);
    const [loanTenure, setLoanTenure] = useState(5);
    const [loanRate, setLoanRate] = useState(6);

    const [loanValueActive, setLoanValueActive] = useState(false);
    const [loanTenureActive, setLoanTenureActive] = useState(false);
    const [loanRateActive, setLoanRateActive] = useState(false);

    const [principalAmount, setPrincipalAmount] = useState();
    const [interestAmount, setInterestAmount] = useState();
    const [totalAmount, setTotalAmount] = useState();

    const [monthEmi, setMonthEmi] = useState();

    const getLoanValue = (e) => {

        console.log(e);

        if (e >= 500000 && e <= 200000000) {
            setLoanValueActive(true);

            if (loanTenure && loanRate) {

                const n = loanTenure * 12;

                const i = (loanRate / 100) / 12;

                const v = Math.pow((1 + i), n);

                const t = (i * v) / (v - 1);

                const result = e * t;

                setMonthEmi(result.toFixed(0));

                const totalAmountValue = result.toFixed(0) * n;

                setTotalAmount(totalAmountValue.toFixed(0))

                setPrincipalAmount(e);

                let principalAmountValue = 0;

                if (e < totalAmountValue) {

                    principalAmountValue = totalAmountValue - e;

                }
                else {

                    principalAmountValue = e - totalAmountValue;

                }

                setInterestAmount(principalAmountValue.toFixed(0))

            }

        }
        else {
            setLoanValueActive(false);

            if (loanTenure && loanRate) {

                const n = loanTenure * 12;

                const i = (loanRate / 100) / 12;

                const v = Math.pow((1 + i), n);

                const t = (i * v) / (v - 1);

                const result = 500000 * t;

                setMonthEmi(result.toFixed(0));

                const totalAmountValue = result.toFixed(0) * n;

                setTotalAmount(totalAmountValue.toFixed(0))

                let principalAmountValue = 0;

                if (500000 < totalAmountValue) {

                    principalAmountValue = totalAmountValue - 500000;

                }
                else {

                    principalAmountValue = 500000 - totalAmountValue;

                }

                setInterestAmount(principalAmountValue.toFixed(0))

            }

        }

    }

    const getLoanTenure = (e) => {

        if (e >= 5 && e <= 30) {
            setLoanTenureActive(true);

            if (loanValue && loanRate) {

                const n = e * 12;

                const i = (loanRate / 100) / 12;

                const v = Math.pow((1 + i), n);

                const t = (i * v) / (v - 1);

                const result = loanValue * t;

                setMonthEmi(result.toFixed(0));

                const totalAmountValue = result.toFixed(0) * n;

                setTotalAmount(totalAmountValue.toFixed(0))

                setPrincipalAmount(loanValue);

                let principalAmountValue = 0;

                if (loanValue < totalAmountValue) {

                    principalAmountValue = totalAmountValue - loanValue;

                }
                else {

                    principalAmountValue = loanValue - totalAmountValue;

                }

                setInterestAmount(principalAmountValue.toFixed(0))

            }
        }
        else {
            setLoanTenureActive(false);

            if (loanValue && loanRate) {

                const n = 5 * 12;

                const i = (loanRate / 100) / 12;

                const v = Math.pow((1 + i), n);

                const t = (i * v) / (v - 1);

                const result = loanValue * t;

                setMonthEmi(result.toFixed(0));

                const totalAmountValue = result.toFixed(0) * n;

                setTotalAmount(totalAmountValue.toFixed(0))

                setPrincipalAmount(loanValue);

                let principalAmountValue = 0;

                if (loanValue < totalAmountValue) {

                    principalAmountValue = totalAmountValue - loanValue;

                }
                else {

                    principalAmountValue = loanValue - totalAmountValue;

                }

                setInterestAmount(principalAmountValue.toFixed(0))

            }
        }

    }

    const getLoanRate = (e) => {

        if (e >= 6 && e <= 20) {
            setLoanRateActive(true);

            if (loanValue && loanTenure) {

                const n = loanTenure * 12;

                const i = (e / 100) / 12;

                const v = Math.pow((1 + i), n);

                const t = (i * v) / (v - 1);

                const result = loanValue * t;

                setMonthEmi(result.toFixed(0));

                const totalAmountValue = result.toFixed(0) * n;

                setTotalAmount(totalAmountValue.toFixed(0))

                setPrincipalAmount(loanValue);

                let principalAmountValue = 0;

                if (loanValue < totalAmountValue) {

                    principalAmountValue = totalAmountValue - loanValue;

                }
                else {

                    principalAmountValue = loanValue - totalAmountValue;

                }

                setInterestAmount(principalAmountValue.toFixed(0))

            }

        }
        else {
            setLoanRateActive(false);

            if (loanValue && loanTenure) {

                const n = loanTenure * 12;

                const i = (6 / 100) / 12;

                const v = Math.pow((1 + i), n);

                const t = (i * v) / (v - 1);

                const result = loanValue * t;

                setMonthEmi(result.toFixed(0));

                const totalAmountValue = result.toFixed(0) * n;

                setTotalAmount(totalAmountValue.toFixed(0))

                setPrincipalAmount(loanValue);

                let principalAmountValue = 0;

                if (loanValue < totalAmountValue) {

                    principalAmountValue = totalAmountValue - loanValue;

                }
                else {

                    principalAmountValue = loanValue - totalAmountValue;

                }

                setInterestAmount(principalAmountValue.toFixed(0))

            }
        }

    }

    const chartData = {
        labels: [],
        datasets: [{
            label: 'Amount',
            data: [principalAmount ? principalAmount : 500000, interestAmount ? interestAmount : 79960],
            backgroundColor: ['#5F3C38', '#E2AD45'],
            borderColor: ['#5F3C38', '#E2AD45'],
            circumference: 180,
            rotation: -90
        }]
    }

    // personal loan range 
    const [personalValue, setpersonalValue] = useState(50000);
    const [personalloanTenure, setpersonalLoanTenure] = useState(1);
    const [personalloanRate, setpersonalLoanRate] = useState(8);

    const [personalValueActive, setpersonalValueActive] = useState(false);
    const [personalloanTenureActive, setpersonalLoanTenureActive] = useState(false);
    const [personalloanRateActive, setpersonalLoanRateActive] = useState(false);

    const [pesonalprincipalAmount, setpesonalPrincipalAmount] = useState();
    const [pesonalinterestAmount, setpesonalInterestAmount] = useState();
    const [personaltotalAmount, setpersonalTotalAmount] = useState();

    const [pesonalmonthEmi, setpesonalMonthEmi] = useState();

    const getpersonalValue = (e) => {

        console.log(e);

        if (e >= 50000 && e <= 10000000) {
            setpersonalValueActive(true);

            if (personalloanTenure && personalloanRate) {

                const n = personalloanTenure * 12;

                const i = (personalloanRate / 100) / 12;

                const v = Math.pow((1 + i), n);

                const t = (i * v) / (v - 1);

                const result = e * t;

                setpesonalMonthEmi(result.toFixed(0));

                const personaltotalAmountValue = result.toFixed(0) * n;

                setpersonalTotalAmount(personaltotalAmountValue.toFixed(0))

                setpesonalPrincipalAmount(e);

                let pesonalprincipalAmountValue = 0;

                if (e < personaltotalAmountValue) {

                    pesonalprincipalAmountValue = personaltotalAmountValue - e;

                }
                else {

                    pesonalprincipalAmountValue = e - personaltotalAmountValue;

                }

                setpesonalInterestAmount(pesonalprincipalAmountValue.toFixed(0))

            }

        }
        else {
            setpersonalValueActive(false);

            if (personalloanTenure && personalloanRate) {

                const n = personalloanTenure * 12;

                const i = (personalloanRate / 100) / 12;

                const v = Math.pow((1 + i), n);

                const t = (i * v) / (v - 1);

                const result = 50000 * t;

                setpesonalMonthEmi(result.toFixed(0));

                const personaltotalAmountValue = result.toFixed(0) * n;

                setpersonalTotalAmount(personaltotalAmountValue.toFixed(0))

                let pesonalprincipalAmountValue = 0;

                if (50000 < personaltotalAmountValue) {

                    pesonalprincipalAmountValue = personaltotalAmountValue - 50000;

                }
                else {

                    pesonalprincipalAmountValue = 50000 - personaltotalAmountValue;

                }

                setpesonalInterestAmount(pesonalprincipalAmountValue.toFixed(0))

            }

        }

    }

    const getpersonalLoanTenure = (e) => {

        if (e >= 1 && e <= 5) {
            setpersonalLoanTenureActive(true);

            if (personalValue && personalloanRate) {

                const n = e * 12;

                const i = (personalloanRate / 100) / 12;

                const v = Math.pow((1 + i), n);

                const t = (i * v) / (v - 1);

                const result = personalValue * t;

                setpesonalMonthEmi(result.toFixed(0));

                const personaltotalAmountValue = result.toFixed(0) * n;

                setpersonalTotalAmount(personaltotalAmountValue.toFixed(0))

                setpesonalPrincipalAmount(personalValue);

                let pesonalprincipalAmountValue = 0;

                if (personalValue < personaltotalAmountValue) {

                    pesonalprincipalAmountValue = personaltotalAmountValue - personalValue;

                }
                else {

                    pesonalprincipalAmountValue = personalValue - personaltotalAmountValue;

                }

                setpesonalInterestAmount(pesonalprincipalAmountValue.toFixed(0))

            }
        }
        else {
            setpersonalLoanTenureActive(false);

            if (personalValue && personalloanRate) {

                const n = 1 * 12;

                const i = (personalloanRate / 100) / 12;

                const v = Math.pow((1 + i), n);

                const t = (i * v) / (v - 1);

                const result = personalValue * t;

                setpesonalMonthEmi(result.toFixed(0));

                const personaltotalAmountValue = result.toFixed(0) * n;

                setpersonalTotalAmount(personaltotalAmountValue.toFixed(0))

                setpesonalPrincipalAmount(personalValue);

                let pesonalprincipalAmountValue = 0;

                if (personalValue < personaltotalAmountValue) {

                    pesonalprincipalAmountValue = personaltotalAmountValue - personalValue;

                }
                else {

                    pesonalprincipalAmountValue = personalValue - personaltotalAmountValue;

                }

                setpesonalInterestAmount(pesonalprincipalAmountValue.toFixed(0))

            }
        }

    }

    const getpersonalLoanRate = (e) => {

        if (e >= 8 && e <= 25) {
            setpersonalLoanRateActive(true);

            if (personalValue && personalloanTenure) {

                const n = personalloanTenure * 12;

                const i = (e / 100) / 12;

                const v = Math.pow((1 + i), n);

                const t = (i * v) / (v - 1);

                const result = personalValue * t;

                setpesonalMonthEmi(result.toFixed(0));

                const personaltotalAmountValue = result.toFixed(0) * n;

                setpersonalTotalAmount(personaltotalAmountValue.toFixed(0))

                setpesonalPrincipalAmount(personalValue);

                let pesonalprincipalAmountValue = 0;

                if (personalValue < personaltotalAmountValue) {

                    pesonalprincipalAmountValue = personaltotalAmountValue - personalValue;

                }
                else {

                    pesonalprincipalAmountValue = personalValue - personaltotalAmountValue;

                }

                setpesonalInterestAmount(pesonalprincipalAmountValue.toFixed(0))

            }

        }
        else {
            setpersonalLoanRateActive(false);

            if (personalValue && personalloanTenure) {

                const n = personalloanTenure * 12;

                const i = (8 / 100) / 12;

                const v = Math.pow((1 + i), n);

                const t = (i * v) / (v - 1);

                const result = personalValue * t;

                setpesonalMonthEmi(result.toFixed(0));

                const personaltotalAmountValue = result.toFixed(0) * n;

                setpersonalTotalAmount(personaltotalAmountValue.toFixed(0))

                setpesonalPrincipalAmount(personalValue);

                let pesonalprincipalAmountValue = 0;

                if (personalValue < personaltotalAmountValue) {

                    pesonalprincipalAmountValue = personaltotalAmountValue - personalValue;

                }
                else {

                    pesonalprincipalAmountValue = personalValue - personaltotalAmountValue;

                }

                setpesonalInterestAmount(pesonalprincipalAmountValue.toFixed(0))

            }
        }

    }

    const personalchartData = {
        labels: [],
        datasets: [{
            label: 'Amount',
            data: [pesonalprincipalAmount ? pesonalprincipalAmount : 50000, pesonalinterestAmount ? pesonalinterestAmount : 2188],
            backgroundColor: ['#5F3C38', '#E2AD45'],
            borderColor: ['#5F3C38', '#E2AD45'],
            circumference: 180,
            rotation: -90
        }]
    }

    // business loan range 
    const [businessValue, setbusinessValue] = useState(50000);
    const [businessloanTenure, setbusinessLoanTenure] = useState(1);
    const [businessloanRate, setbusinessLoanRate] = useState(8);

    const [businessValueActive, setbusinessValueActive] = useState(false);
    const [businessloanTenureActive, setbusinessLoanTenureActive] = useState(false);
    const [businessloanRateActive, setbusinessLoanRateActive] = useState(false);

    const [businessprincipalAmount, setbusinessPrincipalAmount] = useState();
    const [businessinterestAmount, setbusinessInterestAmount] = useState();
    const [businesstotalAmount, setbusinessTotalAmount] = useState();

    const [businessmonthEmi, setbusinessMonthEmi] = useState();

    const getbusinessValue = (e) => {

        console.log(e);

        if (e >= 50000 && e <= 10000000) {
            setbusinessValueActive(true);

            if (businessloanTenure && businessloanRate) {

                const n = businessloanTenure * 12;

                const i = (businessloanRate / 100) / 12;

                const v = Math.pow((1 + i), n);

                const t = (i * v) / (v - 1);

                const result = e * t;

                setbusinessMonthEmi(result.toFixed(0));

                const businesstotalAmountValue = result.toFixed(0) * n;

                setbusinessTotalAmount(businesstotalAmountValue.toFixed(0))

                setbusinessPrincipalAmount(e);

                let businessprincipalAmountValue = 0;

                if (e < businesstotalAmountValue) {

                    businessprincipalAmountValue = businesstotalAmountValue - e;

                }
                else {

                    businessprincipalAmountValue = e - businesstotalAmountValue;

                }

                setbusinessInterestAmount(businessprincipalAmountValue.toFixed(0))

            }

        }
        else {
            setbusinessValueActive(false);

            if (businessloanTenure && businessloanRate) {

                const n = businessloanTenure * 12;

                const i = (businessloanRate / 100) / 12;

                const v = Math.pow((1 + i), n);

                const t = (i * v) / (v - 1);

                const result = 50000 * t;

                setbusinessMonthEmi(result.toFixed(0));

                const businesstotalAmountValue = result.toFixed(0) * n;

                setbusinessTotalAmount(businesstotalAmountValue.toFixed(0))

                let businessprincipalAmountValue = 0;

                if (50000 < businesstotalAmountValue) {

                    businessprincipalAmountValue = businesstotalAmountValue - 50000;

                }
                else {

                    businessprincipalAmountValue = 50000 - businesstotalAmountValue;

                }

                setbusinessInterestAmount(businessprincipalAmountValue.toFixed(0))

            }

        }

    }

    const getbusinessLoanTenure = (e) => {

        if (e >= 1 && e <= 5) {
            setbusinessLoanTenureActive(true);

            if (businessValue && businessloanRate) {

                const n = e * 12;

                const i = (businessloanRate / 100) / 12;

                const v = Math.pow((1 + i), n);

                const t = (i * v) / (v - 1);

                const result = businessValue * t;

                setbusinessMonthEmi(result.toFixed(0));

                const businesstotalAmountValue = result.toFixed(0) * n;

                setbusinessTotalAmount(businesstotalAmountValue.toFixed(0))

                setbusinessPrincipalAmount(businessValue);

                let businessprincipalAmountValue = 0;

                if (businessValue < businesstotalAmountValue) {

                    businessprincipalAmountValue = businesstotalAmountValue - businessValue;

                }
                else {

                    businessprincipalAmountValue = businessValue - businesstotalAmountValue;

                }

                setbusinessInterestAmount(businessprincipalAmountValue.toFixed(0))

            }
        }
        else {
            setbusinessLoanTenureActive(false);

            if (businessValue && businessloanRate) {

                const n = 1 * 12;

                const i = (businessloanRate / 100) / 12;

                const v = Math.pow((1 + i), n);

                const t = (i * v) / (v - 1);

                const result = businessValue * t;

                setbusinessMonthEmi(result.toFixed(0));

                const businesstotalAmountValue = result.toFixed(0) * n;

                setbusinessTotalAmount(businesstotalAmountValue.toFixed(0))

                setbusinessPrincipalAmount(businessValue);

                let businessprincipalAmountValue = 0;

                if (businessValue < businesstotalAmountValue) {

                    businessprincipalAmountValue = businesstotalAmountValue - businessValue;

                }
                else {

                    businessprincipalAmountValue = businessValue - businesstotalAmountValue;

                }

                setbusinessInterestAmount(businessprincipalAmountValue.toFixed(0))

            }
        }

    }

    const getbusinessLoanRate = (e) => {

        if (e >= 8 && e <= 25) {
            setbusinessLoanRateActive(true);

            if (businessValue && businessloanTenure) {

                const n = businessloanTenure * 12;

                const i = (e / 100) / 12;

                const v = Math.pow((1 + i), n);

                const t = (i * v) / (v - 1);

                const result = businessValue * t;

                setbusinessMonthEmi(result.toFixed(0));

                const businesstotalAmountValue = result.toFixed(0) * n;

                setbusinessTotalAmount(businesstotalAmountValue.toFixed(0))

                setbusinessPrincipalAmount(businessValue);

                let businessprincipalAmountValue = 0;

                if (businessValue < businesstotalAmountValue) {

                    businessprincipalAmountValue = businesstotalAmountValue - businessValue;

                }
                else {

                    businessprincipalAmountValue = businessValue - businesstotalAmountValue;

                }

                setbusinessInterestAmount(businessprincipalAmountValue.toFixed(0))

            }

        }
        else {
            setbusinessLoanRateActive(false);

            if (businessValue && businessloanTenure) {

                const n = businessloanTenure * 12;

                const i = (8 / 100) / 12;

                const v = Math.pow((1 + i), n);

                const t = (i * v) / (v - 1);

                const result = businessValue * t;

                setbusinessMonthEmi(result.toFixed(0));

                const businesstotalAmountValue = result.toFixed(0) * n;

                setbusinessTotalAmount(businesstotalAmountValue.toFixed(0))

                setbusinessPrincipalAmount(businessValue);

                let businessprincipalAmountValue = 0;

                if (businessValue < businesstotalAmountValue) {

                    businessprincipalAmountValue = businesstotalAmountValue - businessValue;

                }
                else {

                    businessprincipalAmountValue = businessValue - businesstotalAmountValue;

                }

                setbusinessInterestAmount(businessprincipalAmountValue.toFixed(0))

            }
        }

    }

    const businesschartData = {
        labels: [],
        datasets: [{
            label: 'Amount',
            data: [businessprincipalAmount ? businessprincipalAmount : 50000, businessinterestAmount ? businessinterestAmount : 2188],
            backgroundColor: ['#5F3C38', '#E2AD45'],
            borderColor: ['#5F3C38', '#E2AD45'],
            circumference: 180,
            rotation: -90
        }]
    }

    return ( 
        <div className='index-page-main-section'>
            <section className='main-banner-section'>
                <div className='main-banner-constent'>
                    <h3 className='small-heading'>your dream</h3>
                    <h1 className='main-heading'>home with  simple faster friendlier home loans</h1>
                    <p className='content'>Maximizing your tax returns with customized strategies and expert advice tailored to your unique situation.</p>
                    <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='text-arrow-btn'>Get started<img src={Arrow} alt='' /></button></Link>
                </div>
                <div className='main-banner-img'>
                    <img src={Mainbannerimg} alt='' />
                </div>
                <div className='counter-section'>
                    <div className='box'>
                        <h1 className='count'>3 lacs</h1>
                        <h5 className='count-des'>happy customer</h5>
                    </div>
                    <div className='box box2'>
                        <h1 className='count'>200+</h1>
                        <h5 className='count-des'>Branches</h5>
                    </div>
                    <div className='box box3'>
                        <h1 className='count'>50+</h1>
                        <h5 className='count-des'>Cities Covered</h5>
                    </div>
                    <div className='box'>
                        <h1 className='count'>15,00 cr</h1>
                        <h5 className='count-des'>Disbursed Annually</h5>
                    </div>
                </div>
            </section>
            <section className='tax-consultant-section'>
                <div className='tax-consultant-img'>
                    <img src={Taxconsultantimg} alt='' />
                </div>
                <div className='tax-consultant-content'>
                    <h4 className='small-heading'>WE ARE TAX CONSULTANT</h4>
                    <h2 className='main-heading'>We Provide The Best Service For Your Convenience</h2>
                    <p className='tax-consultant-des'>Phasellus molestie porttitor rutrum. Praesent fringilla porttitor dolor ut mollis. Mauris ut aliquet magna. In mauris quam, aliquet sed interdum vitae, suscipit ac justo. Praesent rutrum orci sed turpis dictum fringilla.</p>
                    <ul className="tax-consultant-services-list">
                        <li className='tax-consultant-service'>IRS Tax Problems</li>
                        <li className='tax-consultant-service'>Tax Prepration and Planning</li>
                        <li className='tax-consultant-service'>Payroll Services</li>
                        <li className='tax-consultant-service'>Book keeping and Virtual CFO</li>
                    </ul>
                    <Link to="/tax-consultant" onClick={() => { window.location.href = "/tax-consultant "; }} ><button className='more-btn'>Discover more</button></Link>
                </div>
            </section>

            <section className='quick-repairs-section'>
                <div className='quick-repairs-heading'>
                    <h6 className='main-heading'>Eml Tax Calculator</h6>
                    <h2 className='heading'>Home Loan EMI Calculator</h2>
                    <p className='description'>A Home Loan EMI Calculator is a powerful and user-friendly tool that helps potential homebuyers and homeowners to understand and calculate monthly installments as per their financial needs. Upon entering some required details, the calculator easily computes your EMI amount. Calculate your Home Loan EMI now with ease.</p>
                </div>
                <div className='loan-calculator-section'>
                    <Tabs defaultActiveKey="homeloan" id="uncontrolled-tab-example" >
                        <Tab eventKey="homeloan" title="Home Loan">
                            <div className='loan-details'>
                                <div className='loan-range-select-box d-flex align-items-center'>
                                    <div className='loan-range-amount-box'>
                                        <div className='input-heading-value d-flex justifi-content-space'>
                                            <h4>Loan Amount</h4>
                                            <div className='show-value-input'>
                                                <span>₹</span>
                                                <input type='number' className='calculator-input' value={loanValue ? loanValue : 500000} onChange={(e) => { setLoanValue(e.target.value); getLoanValue(e.target.value) }} />
                                            </div>
                                        </div>
                                        <input type='range' min="500000" max="200000000" step="1" className='range-input' value={loanValueActive ? loanValue : 500000} disabled />
                                        <div className='input-value d-flex justifi-content-space align-items-center'>
                                            <h4 className='input-value-first'>5 Lac</h4>
                                            <h4 className='input-value-last'>20 Cr</h4>
                                        </div>
                                        <div className='loan-range-year-box'>
                                            <div className='input-heading-value d-flex justifi-content-space align-items-center'>
                                                <h4>Loan Tenure</h4>
                                                <div className='show-value-input'>
                                                    <input type='number' className='calculator-input' value={loanTenure ? loanTenure : 5} onChange={(e) => { setLoanTenure(e.target.value); getLoanTenure(e.target.value) }} />
                                                    <span>Years</span>
                                                </div>
                                            </div>
                                            <input type='range' min="5" max="30" step="1" className='range-input' value={loanTenureActive ? loanTenure : 5} disabled />
                                            <div className='input-value d-flex justifi-content-space'>
                                                <h4 className='input-value-first'>5</h4>
                                                <h4 className='input-value-last'>30</h4>
                                            </div>
                                        </div>
                                        <div className='rate-of-intrest-amount-box'>
                                            <div className='input-heading-value d-flex justifi-content-space align-items-center'>
                                                <h4>Rate of interest</h4>
                                                <div className='show-value-input'>
                                                    <input type='number' className='calculator-input' value={loanRate ? loanRate : 6} onChange={(e) => { setLoanRate(e.target.value); getLoanRate(e.target.value) }} />
                                                    <span>%</span>
                                                </div>
                                            </div>
                                            <input type='range' min="6" max="20" step="0.1" className='range-input' value={loanRateActive ? loanRate : 6} disabled />
                                            <div className='input-value d-flex justifi-content-space'>
                                                <h4 className='input-value-first'>6</h4>
                                                <h4 className='input-value-last'>20</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='loan-emi-box-content'>
                                        <div className='loan-emi-box'>
                                            <span className='main-heading'>Monthly Loan EMI</span>
                                            <h3 className='amount'>₹ <span>{monthEmi ? monthEmi : 9666}</span></h3>
                                            <span className='main-content'>Nineteen Thousand Five Hundred And Sixty Six</span>
                                        </div>
                                    </div>
                                    <div className='chart-column'>
                                        <h2>Payment Breakdown:</h2>
                                        <div className='chart'>
                                            <Doughnut
                                                data={chartData}
                                            ></Doughnut>
                                        </div>
                                        <div className='payment-breakdown-details'>
                                            <div className='payment-breakdown-principal'>
                                                <span className='principal-box'></span>
                                                <h5>Principal Amount</h5>
                                                <h6>₹{principalAmount ? principalAmount : 500000}</h6>
                                            </div>
                                            <div className='payment-breakdown-interest'>
                                                <span className='interest-box'></span>
                                                <h5 className='interest-payable'>Interest Payable</h5>
                                                <h6 className='amount'>₹{interestAmount ? interestAmount : 79960}</h6>
                                            </div>
                                            <div className='payment-breakdown-interest'>
                                                <h5 className='total-amount-payable'>Total Amount Payable</h5>
                                                <h6 className='total-amount'>₹{totalAmount ? totalAmount : 579960}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="personalloan" title="Personal Loan">
                            <div className='loan-details'>
                                <div className='loan-range-select-box d-flex align-items-center'>
                                    <div className='loan-range-amount-box'>
                                        <div className='input-heading-value d-flex justifi-content-space'>
                                            <h4>Loan Amount</h4>
                                            <div className='show-value-input'>
                                                <span>₹</span>
                                                <input type='number' className='calculator-input' value={personalValue ? personalValue : 50000} onChange={(e) => { setpersonalValue(e.target.value); getpersonalValue(e.target.value) }} />
                                            </div>
                                        </div>
                                        <input type='range' min="50000" max="10000000" step="1" className='range-input' value={personalValueActive ? personalValue : 50000} disabled />
                                        <div className='input-value d-flex justifi-content-space align-items-center'>
                                            <h4 className='input-value-first'>50 k</h4>
                                            <h4 className='input-value-last'>1 Cr</h4>
                                        </div>
                                        <div className='loan-range-year-box'>
                                            <div className='input-heading-value d-flex justifi-content-space align-items-center'>
                                                <h4>Loan Tenure</h4>
                                                <div className='show-value-input'>
                                                    <input type='number' className='calculator-input' value={personalloanTenure ? personalloanTenure : 1} onChange={(e) => { setpersonalLoanTenure(e.target.value); getpersonalLoanTenure(e.target.value) }} />
                                                    <span>Years</span>
                                                </div>
                                            </div>
                                            <input type='range' min="5" max="30" step="1" className='range-input' value={personalloanTenureActive ? personalloanTenure : 1} disabled />
                                            <div className='input-value d-flex justifi-content-space'>
                                                <h4 className='input-value-first'>1</h4>
                                                <h4 className='input-value-last'>5</h4>
                                            </div>
                                        </div>
                                        <div className='rate-of-intrest-amount-box'>
                                            <div className='input-heading-value d-flex justifi-content-space align-items-center'>
                                                <h4>Rate of interest</h4>
                                                <div className='show-value-input'>
                                                    <input type='number' className='calculator-input' value={personalloanRate ? personalloanRate : 8} onChange={(e) => { setpersonalLoanRate(e.target.value); getpersonalLoanRate(e.target.value) }} />
                                                    <span>%</span>
                                                </div>
                                            </div>
                                            <input type='range' min="8" max="25" step="0.1" className='range-input' value={personalloanRateActive ? personalloanRate : 8} disabled />
                                            <div className='input-value d-flex justifi-content-space'>
                                                <h4 className='input-value-first'>8</h4>
                                                <h4 className='input-value-last'>25</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='loan-emi-box-content'>
                                        <div className='loan-emi-box'>
                                            <span className='main-heading'>Monthly Loan EMI</span>
                                            <h3 className='amount'>₹ <span>{pesonalmonthEmi ? pesonalmonthEmi : 4349}</span></h3>
                                            <span className='main-content'>Nineteen Thousand Five Hundred And Sixty Six</span>
                                        </div>
                                    </div>
                                    <div className='chart-column'>
                                        <h2>Payment Breakdown:</h2>
                                        <div className='chart'>
                                            <Doughnut data={personalchartData} ></Doughnut>
                                        </div>
                                        <div className='payment-breakdown-details'>
                                            <div className='payment-breakdown-principal'>
                                                <span className='principal-box'></span>
                                                <h5>Principal Amount</h5>
                                                <h6>₹{pesonalprincipalAmount ? pesonalprincipalAmount : 50000}</h6>
                                            </div>
                                            <div className='payment-breakdown-interest'>
                                                <span className='interest-box'></span>
                                                <h5 className='interest-payable'>Interest Payable</h5>
                                                <h6 className='amount'>₹{pesonalinterestAmount ? pesonalinterestAmount : 2188}</h6>
                                            </div>
                                            <div className='payment-breakdown-interest'>
                                                <h5 className='total-amount-payable'>Total Amount Payable</h5>
                                                <h6 className='total-amount'>₹{personaltotalAmount ? personaltotalAmount : 52188}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </Tab>
                        <Tab eventKey="businessloan" title="Business Loan">
                            <div className='loan-details'>
                                <div className='loan-range-select-box d-flex align-items-center'>
                                    <div className='loan-range-amount-box'>
                                        <div className='input-heading-value d-flex justifi-content-space'>
                                            <h4>Loan Amount</h4>
                                            <div className='show-value-input'>
                                                <span>₹</span>
                                                <input type='number' className='calculator-input' value={businessValue ? businessValue : 50000} onChange={(e) => { setbusinessValue(e.target.value); getbusinessValue(e.target.value) }} />
                                            </div>
                                        </div>
                                        <input type='range' min="50000" max="10000000" step="1" className='range-input' value={businessValueActive ? businessValue : 50000} disabled />
                                        <div className='input-value d-flex justifi-content-space align-items-center'>
                                            <h4 className='input-value-first'>50 k</h4>
                                            <h4 className='input-value-last'>1 Cr</h4>
                                        </div>
                                        <div className='loan-range-year-box'>
                                            <div className='input-heading-value d-flex justifi-content-space align-items-center'>
                                                <h4>Loan Tenure</h4>
                                                <div className='show-value-input'>
                                                    <input type='number' className='calculator-input' value={businessloanTenure ? businessloanTenure : 1} onChange={(e) => { setbusinessLoanTenure(e.target.value); getbusinessLoanTenure(e.target.value) }} />
                                                    <span>Years</span>
                                                </div>
                                            </div>
                                            <input type='range' min="5" max="30" step="1" className='range-input' value={businessloanTenureActive ? businessloanTenure : 1} disabled />
                                            <div className='input-value d-flex justifi-content-space'>
                                                <h4 className='input-value-first'>1</h4>
                                                <h4 className='input-value-last'>5</h4>
                                            </div>
                                        </div>
                                        <div className='rate-of-intrest-amount-box'>
                                            <div className='input-heading-value d-flex justifi-content-space align-items-center'>
                                                <h4>Rate of interest</h4>
                                                <div className='show-value-input'>
                                                    <input type='number' className='calculator-input' value={businessloanRate ? businessloanRate : 8} onChange={(e) => { setbusinessLoanRate(e.target.value); getbusinessLoanRate(e.target.value) }} />
                                                    <span>%</span>
                                                </div>
                                            </div>
                                            <input type='range' min="8" max="25" step="0.1" className='range-input' value={businessloanRateActive ? businessloanRate : 8} disabled />
                                            <div className='input-value d-flex justifi-content-space'>
                                                <h4 className='input-value-first'>8</h4>
                                                <h4 className='input-value-last'>25</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='loan-emi-box-content'>
                                        <div className='loan-emi-box'>
                                            <span className='main-heading'>Monthly Loan EMI</span>
                                            <h3 className='amount'>₹ <span>{businessmonthEmi ? businessmonthEmi : 4349}</span></h3>
                                            <span className='main-content'>Nineteen Thousand Five Hundred And Sixty Six</span>
                                        </div>
                                    </div>
                                    <div className='chart-column'>
                                        <h2>Payment Breakdown:</h2>
                                        <div className='chart'>
                                            <Doughnut
                                                data={businesschartData}
                                            ></Doughnut>
                                        </div>
                                        <div className='payment-breakdown-details'>
                                            <div className='payment-breakdown-principal'>
                                                <span className='principal-box'></span>
                                                <h5>Principal Amount</h5>
                                                <h6>₹{businessprincipalAmount ? businessprincipalAmount : 50000}</h6>
                                            </div>
                                            <div className='payment-breakdown-interest'>
                                                <span className='interest-box'></span>
                                                <h5 className='interest-payable'>Interest Payable</h5>
                                                <h6 className='amount'>₹{businessinterestAmount ? businessinterestAmount : 2188}</h6>
                                            </div>
                                            <div className='payment-breakdown-interest'>
                                                <h5 className='total-amount-payable'>Total Amount Payable</h5>
                                                <h6 className='total-amount'>₹{businesstotalAmount ? businesstotalAmount : 52188}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </section>
            <section className="our-loans-section">
                <div className='our-loans-heading'>
                    <h6 className='main-heading'>OUR LOANS</h6>
                    <h2 className='heading'>We have your finances covered</h2>
                </div>
                <div className='our-loans-category'>
                    <Tabs defaultActiveKey="personal" id="uncontrolled-tab-example" >
                        <Tab eventKey="personal" title="Personal" className='personal-loan-slider'>
                            <OwlCarousel {...options} className='owl-theme' loop margin={10} nav>
                                <div className='box'>
                                    <h4 className='loan-heading'>Book your Two-Wheeler today with easy repayment EMIs</h4>
                                    <p className='loan-description'>Getting a Two-Wheeler Loan is easy. Affordable interest rates start as low as 11.5% p.a.*</p>
                                    <img src={Twowheelericon} alt='' />
                                    <h3 className='loan-main-heading'>Two-Wheeler Loan</h3>
                                    <div className='loan-btns'>
                                        <Link to='/contact' className='appointment' onClick={() => { window.location.href = "/contact"; }}><button className='know-more-btn btn'>Know more</button></Link>
                                        <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='apply-more-btn btn'>Apply more</button></Link>
                                    </div>
                                </div>
                                <div className='box'>
                                    <h4 className='loan-heading'>Enjoy remarkable returns on your Recurring Deposit</h4>
                                    <p className='loan-description'>Rated "[ICRA]AA+ (Stable)" by ICRA and "IND AA+/ Stable" by India Ratings and Research</p>
                                    <img src={Recurringdepositeicon} alt='' />
                                    <h3 className='loan-main-heading'>Recurring Deposit</h3>
                                    <div className='loan-btns'>
                                        <Link to='/contact' className='appointment' onClick={() => { window.location.href = "/contact"; }}><button className='know-more-btn btn'>Know more</button></Link>
                                        <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='apply-more-btn btn'>Apply more</button></Link>
                                    </div>
                                </div>
                                <div className='box'>
                                    <h4 className='loan-heading'>Quick and easy Personal Loan with easy repayment options</h4>
                                    <p className='loan-description'>Get flexible EMI tenures on Personal Loan. Interest rates start as low as 11.5% p.a.*</p>
                                    <img src={Personalloanicon} alt='' />
                                    <h3 className='loan-main-heading'>Personal Loan</h3>
                                    <div className='loan-btns'>
                                        <Link to='/contact' className='appointment' onClick={() => { window.location.href = "/contact"; }}><button className='know-more-btn btn'>Know more</button></Link>
                                        <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='apply-more-btn btn'>Apply more</button></Link>
                                    </div>
                                </div>
                                <div className='box'>
                                    <h4 className='loan-heading'>Get the best interest rates on your Fixed Deposit</h4>
                                    <p className='loan-description'>Earn up to 9.10%* p.a. (Including 0.50%* p.a. for Senior Citizens and 0.10%* p.a. for Women)</p>
                                    <img src={Fixeddepositeicon} alt='' />
                                    <h3 className='loan-main-heading'>Fixed Deposit</h3>
                                    <div className='loan-btns'>
                                        <Link to='/contact' className='appointment' onClick={() => { window.location.href = "/contact"; }}><button className='know-more-btn btn'>Know more</button></Link>
                                        <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='apply-more-btn btn'>Apply more</button></Link>
                                    </div>
                                </div>
                                <div className='box'>
                                    <h4 className='loan-heading'>Enjoy remarkable returns on your Recurring Deposit</h4>
                                    <p className='loan-description'>Rated "[ICRA]AA+ (Stable)" by ICRA and "IND AA+/ Stable" by India Ratings and Research</p>
                                    <img src={Goldloanicon} alt='' />
                                    <h3 className='loan-main-heading'>Gold Loan</h3>
                                    <div className='loan-btns'>
                                        <Link to='/contact' className='appointment' onClick={() => { window.location.href = "/contact"; }}><button className='know-more-btn btn'>Know more</button></Link>
                                        <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='apply-more-btn btn'>Apply more</button></Link>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </Tab>
                        <Tab eventKey="business" title="Business" className='business-loan-slider'>
                            <OwlCarousel {...options} className='owl-theme' loop margin={10} nav>
                                <div className='box'>
                                    <h4 className='loan-heading'>Grow your business & make extra profit</h4>
                                    <p className='loan-description'>Reliable and fast loan approval process with minimum documentation</p>
                                    <img src={Businessloanicon} alt='' />
                                    <h3 className='loan-main-heading'>Business Loan</h3>
                                    <div className='loan-btns'>
                                        <Link to='/contact' className='appointment' onClick={() => { window.location.href = "/contact"; }}><button className='know-more-btn btn'>Know more</button></Link>
                                        <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='apply-more-btn btn'>Apply more</button></Link>
                                    </div>
                                </div>
                                <div className='box'>
                                    <h4 className='loan-heading'>Accelerate twice at the speed of your business</h4>
                                    <p className='loan-description'>Getting a Passenger Commercial Vehicle Finance is simple. Interest rates starting 14% p.a.*</p>
                                    <img src={Passengervehicleicon} alt='' />
                                    <h3 className='loan-main-heading'>passenger Commercial Vehicle Finance</h3>
                                    <div className='loan-btns'>
                                        <Link to='/contact' className='appointment' onClick={() => { window.location.href = "/contact"; }}><button className='know-more-btn btn'>Know more</button></Link>
                                        <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='apply-more-btn btn'>Apply more</button></Link>
                                    </div>
                                </div>
                                <div className='box'>
                                    <h4 className='loan-heading'>Simplify fuel expenses with SMILEAGE</h4>
                                    <p className='loan-description'>The quickest credit facility for fuel & lubricants available across India</p>
                                    <img src={Fuelfinanceicon} alt='' />
                                    <h3 className='loan-main-heading'>Fuel Finance</h3>
                                    <div className='loan-btns'>
                                        <Link to='/contact' className='appointment' onClick={() => { window.location.href = "/contact"; }}><button className='know-more-btn btn'>Know more</button></Link>
                                        <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='apply-more-btn btn'>Apply more</button></Link>
                                    </div>
                                </div>
                                <div className='box'>
                                    <h4 className='loan-heading'>Drive past tolls effortlessly with FASTag Recharges</h4>
                                    <p className='loan-description'>Make your everyday travel easy and cashless with convenient Toll Finance</p>
                                    <img src={Tollfinanceicon} alt='' />
                                    <h3 className='loan-main-heading'>Toll Finance</h3>
                                    <div className='loan-btns'>
                                        <Link to='/contact' className='appointment' onClick={() => { window.location.href = "/contact"; }}><button className='know-more-btn btn'>Know more</button></Link>
                                        <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='apply-more-btn btn'>Apply more</button></Link>
                                    </div>
                                </div>
                                <div className='box'>
                                    <h4 className='loan-heading'>Manage freight charges and transportation costs effortlessly</h4>
                                    <p className='loan-description'>Manage transportation & freight costs effortlessly with Challan Discounting</p>
                                    <img src={Challanicon} alt='' />
                                    <h3 className='loan-main-heading'>Challan Discounting</h3>
                                    <div className='loan-btns'>
                                        <Link to='/contact' className='appointment' onClick={() => { window.location.href = "/contact"; }}><button className='know-more-btn btn'>Know more</button></Link>
                                        <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='apply-more-btn btn'>Apply more</button></Link>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </Tab>
                    </Tabs>
                </div>
            </section>
            <section className="our-partners-section" >
                <div className='our-partners-heading' >
                    <h6 className='main-heading' > OUR PARTNERS </h6>
                    <h2 className='heading' > Get in -depth knowledge about all things related to loans and your finances </h2>
                </div>
                <div className='our-partners-category' >
                    <Tabs defaultActiveKey="personal"
                        id="uncontrolled-tab-example" >
                        <Tab eventKey="personal" title="Personal Loan" >
                            <div className='box' >
                                {
                                    personalbox && personalbox.map((value, index) => {
                                        return (
                                            <div key={index} className='img-1 img-box' >
                                                <img alt='' src={value.img} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Tab>
                        <Tab eventKey="home" title="Home Loan" >
                            <div className='box' >
                                {
                                    homebox && homebox.map((value, index) => {
                                        return (
                                            <div key={index} className='img-1 img-box' >
                                                <img alt='' src={value.img} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Tab>
                        <Tab eventKey="loan" title="Loan Property" >
                            <div className='box' >
                                {
                                    loanbox && loanbox.map((value, index) => {
                                        return (
                                            <div key={index} className='img-1 img-box' >
                                                <img alt='' src={value.img} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Tab>
                        <Tab eventKey="business" title="Business Loan" >
                            <div className='box' >
                                {
                                    businessbox && businessbox.map((value, index) => {
                                        return (
                                            <div key={index} className='img-1 img-box' >
                                                <img alt='' src={value.img} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </section>
            <section className='testimonial-section'>
                <div className='testimonial-heading'>
                    <h6 className='main-heading'>Testimonial</h6>
                    <h2 className='heading'>Our Certified Public Accountants Have Knowledge And Experience</h2>
                </div>
                <div className='testimonial-slider-animation'>
                    <div className='testimonial-slider'>
                        <Slider {...settingsslider}>
                            <div className='testimonial-box'>
                                <img src={Testimonialimg6} alt='' />
                                <h3 className='testimonial-name'>Mr. Scott Wyman</h3>
                                <p className='testimonial-description'>Our certified public accountants have knowledge and experience in a wide variety of industries. We offer diverse and very unique specialty services that ensure continued growth, success and longevity for decades to Come to Tax Consulting.</p>
                            </div>
                            <div className='testimonial-box'>
                                <img src={Testimonialimg6} alt='' />
                                <h3 className='testimonial-name'>Mr. Scott Wyman</h3>
                                <p className='testimonial-description'>Our certified public accountants have knowledge and experience in a wide variety of industries. We offer diverse and very unique specialty services that ensure continued growth, success and longevity for decades to Come to Tax Consulting.</p>
                            </div>
                            <div className='testimonial-box'>
                                <img src={Testimonialimg6} alt='' />
                                <h3 className='testimonial-name'>Mr. Scott Wyman</h3>
                                <p className='testimonial-description'>Our certified public accountants have knowledge and experience in a wide variety of industries. We offer diverse and very unique specialty services that ensure continued growth, success and longevity for decades to Come to Tax Consulting.</p>
                            </div>
                        </Slider>
                    </div>
                    <div className='testimonial-animation'>
                        <div className="image-animation main">
                            <div className="big-circle">
                            </div>
                            <div className="circle">
                                <div className="icon-block">
                                    <img src={Testimonialimg1} alt="app icon" />
                                </div>
                                <div className="icon-block">
                                    <img src={Testimonialimg2} alt="blockchain icon" />
                                </div>
                                <div className="icon-block">
                                    <img src={Testimonialimg3} alt="ar-vr icon" />
                                </div>
                                <div className="icon-block">
                                    <img src={Testimonialimg4} alt="artificial intelligence icon" />
                                </div>
                                <div className="icon-block">
                                    <img src={Testimonialimg5} alt="artificial intelligence icon" />
                                </div>
                            </div>
                            <div className="circle-2"></div>
                            <div className="circle-3"></div>
                            <div className="center-logo">
                                <img src={Testimoniallogo} alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='contact-us-sction'>
                <div className='contact-us-img'>
                    <img src={Contactusimg} alt='' />
                </div>
                <div className='contact-us-content'>
                    <h5 className='main-heading'>CONTACT US</h5>
                    <h2 className='heading'>Please Fill Out This Form To And We Will Get In Touch.</h2>
                    <form action="https://formspree.io/f/mjvqarod"
                        method="POST" target="_blank" className='contact-form'>
                        <label className='first-name'>First name*<input type='text' name='First-Name' /></label>
                        <label className='email'>Email*<input type='email' name='Email' /></label>
                        <label className='phone-number'>Phone Number*<input type='number' name='Phone-Number' value={phoneNumber} onChange={handlePhoneNumberChange} minLength={10} /></label>
                        <label className='subject'>Subject*<input type='text' name='Subject' /></label>
                        <label className='message'>Message<textarea rows="4" name='Message' /></label>
                        <input type='submit' value="Send us Message" className='submit-btn' />
                    </form>
                </div>
            </section>
        </div>
    )
}