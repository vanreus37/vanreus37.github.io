Draggable.create("#map img", {
    type:"x,y",
        bounds:"#wrapper",
        edgeResistance:0.5
 });


function init(){
    var vw = window.innerWidth/100;
    var vh = window.innerHeight/100;

    //document.getElementById('bottom-companies').style.bottom = 30*vw+'px';
    //document.getElementById('bottom-companies').style.height = 10*vh+'px';
}

function companies(index){
    document.getElementById("")
    document.getElementById("info-container").style.display = "block";
    document.getElementById("bottom-companies").style.display = "none";
    if(index == 0){
        document.getElementById("company-name").innerText = "Optiver";
        document.getElementById("info").innerText = "Optiver is a leading technology-based trading firm with over one thousand people globally, \
        united in our mission to improve the market. We provide liquidity to the\
         markets, using our own capital, at our own risk, trading in tens of thousands of financial instruments on over 50 \
        exchanges around the world.\
        \
        Engineering is at the core of our trading strategies. We build and maintain low-latency trading \
        systems that respond to market events in nanoseconds. Our systems have \
        to be fast, reliable and precise. Our engineers continually refine, store, and analyse hundreds of terabytes of data, \
        enabling us to automatically price large, diverse sets of financial \
        instruments with extremely low error tolerance.\
         \
        To do this, we use sophisticated technology and largescale systems - our infrastructure is a combination of 10 000 highly customised components and 600 different \
        applications, which run on 1500 servers distributed globally.\
         \
        As an engineer at Optiver, you will be collaborating with our traders and researchers to solve \
        complex problems and to develop proprietary software that provides immediate results and direct impact. You could be working on a change to a trading system in the morning and see it  running live in the afternoon. The goal is to find the simplest, \
        cleanest solution and to optimise it continually.";
    }
    if(index == 1){
        document.getElementById("company-name").innerText = "Picnic";
        document.getElementById("info").innerText = "Picnic is rethinking the way people buy food. Without physical stores,\
        we use an app-only approach and a user-centric philosophy, to make \
        grocery shopping quick, simple, and fun.\
        \
        Starting in one Dutch \
        town in 2015, we now serve over 100 cities in both the Netherlands and \
        Germany. The secret to our success? An end-to-end business and a \
        just-in-time supply chain. From the app-only store, forecasting of \
        orders, warehouse fulfillment, to the evolving distribution strategy of \
        our fleet of electric vehicles, we build everything in-house on our own \
        software.\
        \
        The team has expanded from 10 to over 300 in 4 years. \
        Growth has been exponential and we’re not the only ones to say so. With \
        multiple awards to our name and a Series C funding round of 250 million,\
         we have become true disruptors in some of the most challenging \
        industries: inner-city logistics, e-commerce retail, and enterprise \
        software. And thanks to our people-first attitude and a friendly \
        delivery team, we become an integral part of every neighborhood we \
        serve.";
    }
    if(index == 2){
        document.getElementById("company-name").innerText = "PwC";
        document.getElementById("info").innerText = "We're a network of rims in 158 countries with more than 250,000 people. At PwC in the Netherlands \
        over 5,000 people work together. We're committed to delivering quality in assurance, tax and advisory services.";
    }
    if(index == 3){
        document.getElementById("company-name").innerText = "Palantir";
        document.getElementById("info").innerText = "Today’s critical institutions don’t just protect public safety or \
        provide vital goods and services—they also deal with astonishing amounts\
         of data. At Palantir, our mission is to help the world’s government \
        agencies, Fortune 500 companies,\
         and non-profits transform how they understand and use that data. \
         \
         \
         \
        We build software that lets organizations integrate and analyse their \
        data so they can solve problems they couldn’t before. For example, we’re\
         helping our customers combat terrorism at home and abroad, investigate \
        and prosecute financial fraud rings, offer\
         more credit to retail banking customers, manufacture products faster \
        and more safely, and fight violent crime in the world’s great cities.\
        ";
    }
    if(index == 4){
        document.getElementById("company-name").innerText = "Tata C. Services";
        document.getElementById("info").innerText = "Tata Consultancy Services (TCS) is one\
        of the largest IT services companies in the world with its Benelux headquarters\
        in Amsterdam, present since 1992. Over 450,000 of the world’s best-trained\
        consultants in 46 countries work with us. TCS ranks as #1 in customer satisfaction\
        in the Netherlands according to Whitelane Research. Currently, TCS serves\
        approximately 50 customers including ABN Amro, ING Group, KLM, NXP, ASML\
        and Ahold Delhaize. \
        \
        TCS Netherlands is ranked as the #1 Employer\
        in Europe in 2018 by Top Employer Institute. Today, TCS has more than 2700\
        employees working in the Netherlands, supported by associates in various\
        delivery centers across the globe. TCS provides digital training for its\
        employees to make sure that every TCS client has access to the very latest\
        skills, insight and expertise. \
        ";
    }
    if(index == 5){
        document.getElementById("company-name").innerText = "Copernica";
        document.getElementById("info").innerText = "Copernica is a company that develops email software, from the\
        front-end that the marketeer uses to set up e-mail campaigns to\
        the back-end that the DevOps engineer uses to send out large\
        volumes of e-mail messages. We develop smart solutions for this\
        entire chain in-house and are looking for talented people to\
        help us in this process.";
    }
}

function hide_info(){
    document.getElementById("info-container").style.display = "none";
    document.getElementById("bottom-companies").style.display = "block";
}