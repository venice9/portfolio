import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import emailjs from "emailjs-com";

import {
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaBars,
  FaTimes,
  FaFileAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import {
  SiGooglesheets,
  SiCanva,
} from "react-icons/si";

interface JobSection {
  subtitle: string;
  details: string[];
}

interface Job {
  title: string;
  date: string;
  subtitle?: string;
  details?: string[];
  sections?: JobSection[];
}

interface Training {
  title: string;
}



import { motion, AnimatePresence } from "framer-motion";


const App: React.FC = () => {
  // NAV BAR AUTO SELECTION HOOKS
  const [activeSection, setActiveSection] = useState("home");

  // HAMBURGER ICON FOR 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
  // CONTACT FORM HOOKS
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  // CONTACT FORM
  const handleContactSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .send(
      "service_z71zb26",   
      "template_lo79bhj",  
      {
        name: contactName,
        email: contactEmail,
        subject: contactSubject,
        message: contactMessage,
      },
      "dYkzNUYIPWKuEyrQ2"    
    )
    .then(
      () => {
        alert("Message sent successfully!");
        setContactName("");
        setContactEmail("");
        setContactSubject("");
        setContactMessage("");
      },
      (error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send. Please try again.");
      }
    );
};

  // Automatically Moving Hover in Navs
  useEffect(() => {
  const handleScroll = () => {
    const sections = ["home", "employment", "about"];

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  


// Function to scroll to a section smoothly
const scrollToSection = (sectionId: string) => {
  setActiveSection(sectionId);

  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  // Close mobile menu after clicking a link
  setMobileMenuOpen(false);
};

// Effect: lock/unlock background scroll when mobile menu is open
useEffect(() => {
  if (mobileMenuOpen) {
    document.body.style.overflow = "hidden"; 
  } else {
    document.body.style.overflow = "auto";  
  }

  return () => {
    document.body.style.overflow = "auto";   
  };
}, [mobileMenuOpen]);


  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


 const jobs: Job[] = [
  {
    title:
      "DATA ENCODER | NATIONAL IRRIGATION ADMINISTRATION - LOWER AGNO RIVER IRRIGATION SYSTEM",
    date: "October 01, 2025 - Present (Permanent)",
    subtitle: "Summary of Duties:",
    details: [
      "Encode a variety of correspondence, reports, and memoranda.",
      "Receive and record official communications; check attachments for completeness.",
      "Prepare and submit routine correspondence and documents to pertinent officers.",
      "File and maintain accurate electronic-based data and records.",
      "Follow up, reproduce, and certify copies of documents as requested.",
      "Prepare bills for irrigation fee collection and compile annual receivable statements.",
      "Encode, post, and update irrigation fee data including exemptions and ownership changes.",
      "Compile and bind data for billing references and safekeeping.",
      "Review ITR Cards, bills, and payment statements for accuracy.",
    ],
  },
  {
    title:
      "SECRETARY B | NATIONAL IRRIGATION ADMINISTRATION - LOWER AGNO RIVER IRRIGATION SYSTEM",
    date: "February 05, 2025 - September 30, 2025 (Contract of Service)",
    sections: [
      {
        subtitle: "List of Accomplishments and Contributions:",
        details: [
          "Prepared and encoded Free Irrigation Service Act (FISA) & Registry System for Basic Sector in Agriculture (RSBSA) applications of farmer beneficiaries and other encoding works.",
          "Monitored and prepared reports on the status of FISA and RSBSA applications.",
        ],
      },
      {
        subtitle: "Summary of Actual Duties:",
        details: [
          "Preparation of Weekly Report in Monitoring gathered FISA and RSBSA applications.",
          "Encode data, submit and transmit FISA applications with complete attachments.",
          "Encode and submit data of RSBSA applications.",
          "Preparation of Statement of Account.",
          "Preparation of FISA Writing Off Status.",
          "Preparation of Minutes of the Meeting.",
          "Maintenance and filing records.",
        ],
      },
    ],
  },
  {
    title:
      "ADMINISTRATIVE AIDE IV | DEPARTMENT OF EDUCATION - ROSALES NATIONAL HIGH SCHOOL",
    date: "January 16, 2023 to October 31, 2023 (Permanent)",
    sections: [
      {
        subtitle: "List of Accomplishments and Contributions:",
        details: [
          "Assisted in Administrative Duties.",
          "Updated Service Credits and other HR related Records.",
        ],
      },
      {
        subtitle: "Summary of Actual Duties:",
        details: [
          "Assist in the preparation of monthly personnel services reports.",
          "Certificate of Employment and Service Record preparation.",
          "Assist in uploading of Web-Based Members Records Creation to GSIS.",
          "Statement of Service Credits preparation.",
          " Monitoring of Daily Time Record and Form 6 (Leave Form) of the employees.",
          "Employee Welfare of Benefit Preparation.",
        ],
      },
    ],
  },
  {
    title:
      "RECORDS OFFICER C | NATIONAL IRRIGATION ADMINISTRATION - LOWER AGNO RIVER IRRIGATION SYSTEM IMPROVEMENT PROJECT",
    date: "January 1, 2019 to November 30, 2022 (Casual)",
    sections: [
      {
        subtitle: "List of Accomplishments and Contributions:",
        details: [
          "Strengthened the Administrative Section through the efficient utilization of manpower resources.",
        ],
      },
      {
        subtitle: "Summary of Actual Duties:",
        details: [
          "Maintenance of 201 files, other HR related records and Administrative & Finance Division.",
          "Preparation of monthly personnel services report and personnel services cost.",
          "Certificate of Employment of personnel and Service Record preparation.",
          "Uploading of Web-Based Members Records Creation and Updating for the Agency Remittance Advice to GSIS.",
          "Appointment processing.",
          "LARISIP Employment Profile and Employment History preparation.",
          "Statement of Leave Credits preparation.",
          "Employee Welfare of Benefit Preparation.",
          "Processing of Terminal Leave Benefit.",
          "Inventory on Personnel Services.",
          "Authenticate photocopy of official documents.",
        ],
      },
    ],
  },
  {
    title:
      "INFORMATION OFFICER C | NATIONAL IRRIGATION ADMINISTRATION - AGNO RIVER IRRIGATION SYSTEM EXTENSION PROJECT",
    date: "July 3, 2017 to December 31, 2018 (Casual)",
    sections: [
      {
        subtitle: "List of Accomplishments and Contributions:",
        details: [
          "Public Relations and Publicity",
          "Publications/IEC Materials",
          "Audio-Visual",
          "Communications and Program Monitoring",
        ],
      },
      {
        subtitle: "Summary of Actual Duties:",
        details: [
          "Quarterly Publication of the Official News Letter of NIA-ARISEP",
          "Quarterly Update on Project Primer",
          "Maintenance of Photo Gallery",
          "Participation on Nia-Central Office Special Events",
          "Linkage with other Agencies",
          "Linkage with Media",
          "Coverage & Documentation of Special Events",
          "Received and recorded important documents such as Communication Letters, Memorandum and other pertinent documents.",
        ],
      },
    ],
  },
  {
    title:
      "STATISTICIAN B | NATIONAL IRRIGATION ADMINISTRATION - AGNO RIVER IRRIGATION SYSTEM EXTENSION PROJECT",
    date: "January 26, 2016 to June 30, 2017 (Job Order)",
    sections: [
      {
        subtitle: "List of Accomplishments and Contributions:",
        details: [
          "Agro-Socio Economic Survey",
        ],
      },
      {
        subtitle: "Summary of Actual Duties:",
        details: [
          "Coordination with LGU",
          "Gathering of Farmers Listing per Barangay",
          "Random Sampling of Respondents",
          "Actual Field Survey / Interview",
          "Data Editing/Tabulation",
          "Data Processing",
          "Analysis and Report Writing",
        ],
      },
    ],
  },
  {
    title:
      "PRICING AND UNDERWRITING ANALYST | ALTERNATIVE DISTRIBUTION/STAFF ALLIANCE,INC./MANULIFE PHILIPPINES",
    date: "August 24, 2015 to November 24, 2015 (Contractual)",
    sections: [
      {
        subtitle: "List of Accomplishments and Contributions:",
        details: [
          "Responsible for evaluating the risk involved in issuing insurance policies. Looked for applications from the clients and determined whether or not to issue coverage based on their assessment of risk",
        ],
      },
      {
        subtitle: "Summary of Actual Duties:",
        details: [
          "Reviewed existing policies to ensure that they’re still valid and that premiums were being paid appropriately. Monitored claims made by policyholders to determine if they should be paid out or denied.",
        ],
      },
    ],
  },
];

const trainings: Training[] = [
  { title: "ISO 9001:2015 ORIENTATION FOR NIA PANGASINAN IMO EMPLOYEES" },
  { title: "WORKSHOPS ON FISA ELECTRONIC DATA BANK SYSTEM IN ACCORDANCE TO THE NEW FISA CITIZENS" },
  { title: "ORIENTATION AND HANDS-ON TUTORIAL OF REGISTRY SYSTEM FOR BASIC SECTOR IN AGRICULTURAL (RSBSA) APPLICATION REGISTRATION FOR AGRIPUHUNAN ONBOARDING" },
  { title: "CONTINUING LEARNING ACTIVITIES FOR HUMAN RESOURCE MANAGEMENT PRACTITIONERS (CLASH)" },
  { title: "ORIENTATION-SEMINAR ON R.A. 11313 OTHERWISE KNOWN AS SAFE SPACES ACT WITH AN OVERVIEW OF R.A. 9262 (ANTI-VIOLENCE AGAINST WOMEN AND THEIR CHILDREN" },
  { title: "TRAINING ON ETHICS, ACCOUNTABILITY AND DISCIPLINE FOR LARISIP MEN AND WOMEN PERSONNEL" },
  { title: "LEAVE ADMINISTRATION COURSE FOR EFFECTIVENESS (LACE)" },
  { title: "SEMINAR-WORKSHOP IN TECHNICAL WRITING FOR LARISIP WOMEN AND MEN PERSONNEL" },
  { title: "SEMINAR ON R.A. 9710 - MAGNA CARTA OF WOMEN" },
  { title: "SEMINAR-WORKSHOP ON ANXIETY, STRESS MANAGEMENT AND COPING WITH DEPRESSION AMIDST COVID-19 SITUATION" },
  { title: "GENDER SENSITIVITY TRAINING" },
  { title: "2019 YEAR-END ASSESSMENT OF LARISIP's PROGRAMS AND ACTIVITIES" },
  { title: "GENERALLY ACCEPTED RECORDKEEPING PRINCIPLES (GARP): ROAD TO GOVERNANCE" },
  { title: "AGENCY AUTHORIZED OFFICERS (AAOs) AND ELECTRONIC REMITTANCE FILE (ERF) HANDLERS CONSULTATIVE MEETING AND TRAINING/RE-TRAINING WORKSHOP" },
  { title: "STRATEGIC PERFORMANCE MANAGEMENT SYSTEM SEMINAR-WORKSHOP" },
  { title: "SEMINAR AND OPEN FORUM ON ANTI-VIOLENCE AGAINST WOMEN AND THEIR CHILDREN (VAWC)" },
  { title: "AAO TRAINING ON DOWNLOAD/UPLOAD REQUEST VIA WEB-BASED MSP" },
  { title: "SEMINAR-WORKSHOP ON GENDER MAINSTREAMING EVALUATION FRAMEWORK (GMEF)" },
  { title: "2018 NATIONAL REVIEW AND PLANNING WORKSHOP FOR PUBLIC RELATIONS OFFICERS" },
  { title: "YEAR-END REVIEW & PLANNING WORKSHOP ON INSTITUTIONAL DEVELOPMENT PROGRAM FOR CY 2016 & 2017" },
  { title: "IRRIGATION MANAGEMENT TRANSFER (IMT) ORIENTATION SEMINAR FOR PERSONNEL OF INSTITUTIONAL DEVELOPMENT SECTION (IDS)" },
  { title: "PROJECT REVIEW AND PLANNING WORKSHOP (PRPW) ON THE IMPLEMENTATION OF PROGRAM OF WORK/ACTIVITIES FOR CY-2017 AND CY-2018" },
];

const accomplishmentSections = [
  {
    title: "DATA ENCODER | NATIONAL IRRIGATION ADMINISTRATION - LOWER AGNO RIVER IRRIGATION SYSTEM",
    images: [
      { src: "./images/1/encoder1.jpg" },
      { src: "./images/1/encoder2.jpg" },
      { src: "./images/1/encoder3.jpg" },
    ],
  },
  {
    title: "SECRETARY B | NATIONAL IRRIGATION ADMINISTRATION - LOWER AGNO RIVER IRRIGATION SYSTEM",
    images: [
      { src: "./images/2/sec1.jpg" },
      { src: "./images/2/sec2.jpg" },
      { src: "./images/2/sec3.jpg" },
    ],
  },
  {
    title: "ADMINISTRATIVE AIDE IV | DEPARTMENT OF EDUCATION - ROSALES NATIONAL HIGH SCHOOL",
    images: [
      { src: "./images/3/ad1.png" },
      { src: "./images/3/ad2.png" },
      { src: "./images/3/ad3.png" },
    ],
  },
  {
    title: "RECORDS OFFICER C | NATIONAL IRRIGATION ADMINISTRATION - LOWER AGNO RIVER IRRIGATION SYSTEM IMPROVEMENT PROJECT",
    images: [
      { src: "./images/4/off1.png" },
      { src: "./images/4/off2.png" },
      { src: "./images/4/off3.png" },
    ],
  },
  {
    title: "INFORMATION OFFICER C | NATIONAL IRRIGATION ADMINISTRATION - AGNO RIVER IRRIGATION SYSTEM EXTENSION PROJECT",
    images: [
      { src: "./images/5/inf1.png" },
      { src: "./images/5/inf2.png" },
      { src: "./images/5/inf3.png" },
    ],
  },
  {
    title: "STATISTICIAN B | NATIONAL IRRIGATION ADMINISTRATION - AGNO RIVER IRRIGATION SYSTEM EXTENSION PROJECT",
    images: [
      { src: "./images/6/stat1.png" },
      { src: "./images/6/stat2.png" },
      { src: "./images/6/stat3.png" },
    ],
  },
  {
    title: "PRICING AND UNDERWRITING ANALYST | ALTERNATIVE DISTRIBUTION/STAFF ALLIANCE,INC./MANULIFE PHILIPPINES",
    images: [
      { src: "./images/7/pri1.png" },
      { src: "./images/7/pri2.png" },
      { src: "./images/7/pri3.png" },
    ],
  },
];

  return (
    // <div className="min-h-screen bg-gradient-to-br from-blue-700/80 via-black to-violet-900 text-white bg-fixed">
    <div className="min-h-screen bg-black text-white">

     <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="cursor-pointer flex items-center gap-2">
           <h1 className="text-3xl font-[Pacifico] text-white itali">
           Venice
           </h1>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
              {["home", "employment", "about"].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors cursor-pointer text-base ${
                    activeSection === item
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                  }`}>{item}</button>
              ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-indigo-900 px-6 py-2 rounded-lg text-white font-xl hover:bg-blue-900 700 transition-all cursor-pointer"
            >
              Contact Me
            </button>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className=" md:hidden text-white cursor-pointer text-2xl"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Sidebar Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 transform transition-transform duration-300 ease-in-out z-40 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col mt-16 pt-5 pb-100 gap-6 pl-5 text-lg bg-black/40 backdrop-blur-lg">
          {["home", "employment", "about"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="capitalize text-white hover:text-violet-300 transition-colors cursor-pointer text-left"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-indigo-900 px-4 py-2 rounded-lg text-white font-medium hover:from-violet-600 hover:to-purple-700 transition-all cursor-pointer w-fit"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-2">
        <div className="pt-5 text-center max-w-4xl mx-auto">
          <div className="w-70 h-70 mx-auto mb-8 rounded-full overflow-hidden border-4 border-indigo-900">
            <img src="./images/ven2.JPG" alt="Profile" className="w-full h-full object-cover object-top overflow-hidden"/>
          </div>

          <h1 className="text-2xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-indigo-500 bg-clip-text text-transparent">
            I'm Venice Lorraine Castillo
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Data Encoder
          </p>

          
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="./Resume-Castillo, Venice Lorraine.pdf" className="bg-indigo-900 hover:bg-gray-800 backdrop-blur-lg px-8 py-3 !rounded-button text-white font-medium transition-all cursor-pointer whitespace-nowrap flex items-center justify-center rounded-xl">
              <i className="fas fa-download mr-2"></i>Resume
            </a>

            <button
              onClick={() => scrollToSection("skills")}
              className="border-2 border-indigo-900 px-8 py-3 rounded-xl text-gray-200 font-medium hover:bg-indigo-900 hover:text-white transition-all cursor-pointer whitespace-nowrap flex items-center justify-center">
               <i className="fa-solid fa-laptop mr-2"></i>View Skills
           </button>


          </div>
        </div>
      </section>

       <section
  id="employment"
  className="bg-[#0a0a0a] text-gray-200 py-16 px-6 md:px-20"
>
  <h2 className="text-3xl font-bold text-indigo-400 mb-8 text-center">
    Employment History
  </h2>

  <div className="space-y-8">
    {jobs.map((job, index) => (
      <div
        key={index}
        className="bg-[#111111] p-6 rounded-2xl shadow-md border border-indigo-900 hover:border-indigo-600 transition-all duration-300"
      >
        {/* Header (Clickable Title) */}
        <div
          onClick={() => toggleOpen(index)}
          className="flex justify-between items-center cursor-pointer"
        >
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-white">
              {job.title}
            </h3>
            <p className="text-gray-400 italic text-sm md:text-base">
              {job.date}
            </p>
          </div>
          {openIndex === index ? (
            <FaChevronUp className="text-indigo-400 text-3xl sm:text-2xl md:text-xl" />
          ) : (
            <FaChevronDown className="text-indigo-400 text-3xl sm:text-2xl md:text-xl" />
          )}
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {openIndex === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-4"
            >
              {/* Loop through subtitles if job has multiple sections */}
              {job.sections && job.sections.length > 0 ? (
                job.sections.map((section, sIndex) => (
                  <div key={sIndex} className="mb-4">
                    <h4 className="text-indigo-400 font-semibold mb-2">
                      {section.subtitle}
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base">
                      {section.details.map((detail, dIndex) => (
                        <li key={dIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <>
                  <h4 className="text-indigo-400 font-semibold mb-2">
                    {job.subtitle}
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base">
                    {(job.details ?? []).map((duty, i) => (
  <li key={i}>{duty}</li>
))}

                  </ul>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ))}
     {/* Trainings Section (Dropdown Style) */}
<div
  className="bg-[#111111] p-6 rounded-2xl shadow-md border border-indigo-900 hover:border-indigo-600 transition-all duration-300"
>
  <div
    onClick={() => toggleOpen(999)} // use a unique index so it doesn't conflict with jobs
    className="flex justify-between items-center cursor-pointer"
  >
    <h3 className="text-lg md:text-xl font-semibold text-white">
      Trainings
    </h3>
    {openIndex === 999 ? (
      <FaChevronUp className="text-indigo-400 text-lg" />
    ) : (
      <FaChevronDown className="text-indigo-400 text-lg" />
    )}
  </div>

  <AnimatePresence>
    {openIndex === 999 && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden mt-4"
      >
        <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base">
          {trainings.map((training, index) => (
            <li key={index}>{training.title}</li>
          ))}
        </ul>
      </motion.div>
    )}
  </AnimatePresence>
</div>

        {/* Accomplishments Section (Dropdown Gallery by Job) */}
<div
  className="bg-[#111111] p-6 rounded-2xl shadow-md border border-indigo-900 hover:border-indigo-600 transition-all duration-300"
>
  <div
    onClick={() => toggleOpen(2000)} // Unique index for this dropdown
    className="flex justify-between items-center cursor-pointer"
  >
    <h3 className="text-lg md:text-xl font-semibold text-white">
      Documentation
    </h3>
    {openIndex === 2000 ? (
      <FaChevronUp className="text-indigo-400 text-lg" />
    ) : (
      <FaChevronDown className="text-indigo-400 text-lg" />
    )}
  </div>

  <AnimatePresence>
    {openIndex === 2000 && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden mt-6 space-y-8"
      >
        {accomplishmentSections.map((section, index) => (
          <div key={index}>
            {/* Job Title */}
            <h4 className="text-indigo-400 text-lg font-semibold mb-4">
              {section.title}
            </h4>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {section.images.map((img, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-xl border border-indigo-900"
                >
                  <img
                    src={img.src}
                    alt={`${section.title} accomplishment ${imgIndex + 1}`}
                    className="w-full h-55 object-cover hover:opacity-90 transition-all"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
</div>


    </div>
</section>



     {/* SKILLS */}
<section id="skills" className="py-20 px-6 bg-black/50 text-white bg-fixed">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Skills</h2>
    <p className="text-xl text-gray-400 text-center mb-6">
      Technologies & tools I work with
    </p>

    {/* Other Tools */}
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -8, 0, 8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" as const }}
      className=" p-8 rounded-2xl shadow-lg"
    >
      

      {/* Row layout */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {[
          { icon: <SiGooglesheets className="text-green-500 text-4xl" />, name: "Google Sheets" },
          { icon: <FaFileWord className="text-blue-500 text-4xl" />, name: "Microsoft Word" },
          { icon: <FaFileExcel className="text-green-500 text-4xl" />, name: "Microsoft Excel" },
          { icon: <FaFilePowerpoint className="text-orange-500 text-4xl" />, name: "Microsoft PowerPoint" },
          { icon: <FaFileAlt className="text-green-700 text-2xl" />, name: "Microsoft Publisher" },
          { icon: <SiCanva className="text-[#00C4CC] text-4xl" />, name: "Canva" },
        ].map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center w-28 space-y-3"
          >
            <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
              {skill.icon}
            </div>
            <span className="text-gray-300 text-sm text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
</section>


      {/*About Section*/}
      <section id="about" className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-justify text-gray-300 mb-6">
                My name is Venice Lorraine Castillo, and I am from Rosales, Pangasinan. I have eight years of work experience and am currently employed as a Data Encoder at the National Irrigation Administration (NIA) in Rosales, Pangasinan. I take pride in my accuracy, dedication, and strong attention to detail in every task I handle.
              </p>
              <div className="border border-indigo-800 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-gray-200 mb-4">
                  Education
                </h3>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Bachelor of Science in Mathematics
                </h4>
                <p className="text-gray-300 mb-2">
                  Major in Statistics
                </p>
                <p className="text-yellow-500">
                  Pangasinan State University - Urdaneta City Campus
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-96 rounded-2xl overflow-hidden">
                <img
                  src="./images/ven3.jpg"
                  alt="About"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/50 backdrop-blur-md">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-400 text-center mb-12">Let's work together</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-envelope text-indigo-700 w-6"></i>
                  <span className="ml-4">venicelorraine.8@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone text-indigo-700 w-6"></i>
                  <span className="ml-4">+63 927-353-3421</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-indigo-700 w-6"></i>
                  <span className="ml-4">San Pedro East, Rosales, Pangasinan 2441</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                required
                className="w-83 p-3 border border-gray-700 rounded-lg text-white"
                />

              <input
                type="email"
                placeholder="Your Email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                required
                className="w-83 p-3 border border-gray-700 rounded-lg text-white"
                />

              <input
                type="text"
                placeholder="Subject"
                value={contactSubject}
                onChange={(e) => setContactSubject(e.target.value)}
                className="w-83 p-3 border border-gray-700 rounded-lg text-white"
                />

              <textarea
                placeholder="Your Message"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                required
                className="w-83 p-3 border border-gray-700 rounded-lg text-white h-32">
              </textarea>

              <button
                type="submit" className="w-40 bg-indigo-900 hover:bg-purple-900 py-3 rounded-lg text-white font-medium transition-all cursor-pointer">
                   Send Message
              </button>

            </form>

          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                {/* Logo */}
                <div className="cursor-pointer flex items-center gap-2">
                  <h1 className="text-3xl font-[Pacifico] text-white itali">
                  Venice
                  </h1>
                </div>
              </div>
              <p className="text-gray-400">
                Showcasing my professional work experiences and accomplishments.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["Home", "Employment", "About", "Contact"].map(
                  (link) => (
                    <button
                      key={link}
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="block text-gray-400 hover:text-violet-400 transition-colors cursor-pointer"
                    >
                      {link}
                    </button>
                  ),
                )}
              </div>
            </div>
          
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Venice Lorraine Castillo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>



      </div>
  );
};
export default App;
