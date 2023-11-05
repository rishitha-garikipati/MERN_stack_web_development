import React, { useState } from 'react';
import Navbar from './Navbar';
import { Button, Card, Stack, Typography } from '@mui/material';
import { FaInstagram, FaWhatsapp, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';




const centerImageStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const iconContainerStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
};

export default function Home() {
  const [showInformation, setShowInformation] = useState(false);
  const [showInfo, setInfo] = useState(false);

  const toggleInformation = () => {
    setShowInformation(!showInformation);
  };

  const setShowInfo = () => {
    setInfo(!showInfo);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '20px'}}>
      <div style={{ flex: 1 }}>
        <Navbar />
        <Stack sx={{ m: 3 }}>
          <h1 align='center' style={{ color: 'green', margin: 10 }}>
            <marquee>
              Welcome to the online eVisa processing System portal
            </marquee>
          </h1>
        </Stack>
        <Stack sx={{ m: 'auto', textAlign: 'center' }}>
          <img
            src={require('../steps.png')}
            alt="Description"
            style={{ width: '50%', height: 'auto', ...centerImageStyle }}
          />
        </Stack>
        <Stack sx={{ marginBottom: 2 }}>
          <Button
            variant='contained'
            sx={{ backgroundColor: 'skyblue', color: 'black', marginBottom: 2, width: 300 }}
            onClick={toggleInformation}
          >
            Countries/Nationalities who are eligible
          </Button>
          <Button
            variant='contained'
            sx={{ backgroundColor: 'skyblue', color: 'black', marginBottom: 2, width: 300 }}
            onClick={setShowInfo}
          >
            Instructions for Applicant
          </Button>

          {showInformation && (
            <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
              <Card>
                <Typography variant="body1">
                International travellers whose sole objective for visiting India is recreation, sightseeing, casual visit to meet friends and relatives, attending a short term yoga programme, Short term courses on local languages, music, dance, arts & crafts, cooking, medicine etc. which should not be a formal or structured course/programme (courses not exceeding 6 months duration and not issued with a qualifying certificate/ diploma etc), Voluntary work of short duration (for a maximum period of one month, which do not involve any monetary payment or consideration of any kind in return), medical treatment including treatment under Indian systems of medicine, business purpose, as attendant to e-Medical visa holder, attending a conference/ seminar/ workshop organized by a Ministry or Department of the Government of India, State Governments or UT Administrations etc. & their subordinate/ attached organizations & PSUs and private conferences organized by private persons/companies/organizations. Applicant's passport should have at least six months validity at the time of making application for grant of e-Visa. International Travellers should have return ticket or onward journey ticket, with sufficient money to spend during his/her stay in India. International Travellers having Pakistani Passport or Pakistani origin may please apply for regular Visa at Indian Mission. Not available to Diplomatic/Official Passport Holders or Laissez-passer travel document holders. Not available to individuals endorsed on Parent's/Spouse's Passport i.e. each individual should have a separate passport. Not available to International Travel Document Holders other than Passport.
                </Typography>
              </Card>
            </div>
          )}
          {showInfo && (
            <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
              <Card>
                <Typography variant="body1">
                e-Visa has 5 sub-categories viz. e-Tourist Visa (for 30 days/01 year/ 05 years), e-Business Visa, e-Medical Visa, e-Medical Attendant Visa, and e-Conference Visa. A foreigner (other than those applying for e-Conference Visa) will be allowed to club activities permitted under these categories. Foreigners applying for e-Conference visa will be permitted to club the activities permitted under e-Tourist visa only (validity co-terminus with e-Conference Visa only i.e. 30 days). Only two e-Medical Attendant Visas will be granted against one e- Medical Visa.
                <br />
                  For e-Tourist and e-Business visa, Applicants of the eligible countries/territories may apply online minimum 4 days in advance of the date of arrival.
                  <br />
                  For e-Medical, e-Medical Attendant and e-Conference visa, Applicants of the eligible countries/territories may apply online minimum 4 days in advance of the date of arrival with a window of 120 days. Example: If you are applying on 1st Sept then applicant can select arrival date from 5th Sept to 2nd Jan.
                  <br />
                  Sample eVisa application form is available on the tab near the bottom of eVisa main page.
                  <br />
                  Recent front-facing photograph with a white background and photo page of Passport containing personal details like name, date of birth, nationality, expiry date etc. are to be uploaded mandatorily by the applicant. Additionally, one more document depending upon the e-Visa type would also be required to be uploaded. The application is liable to be rejected if the uploaded documents and photograph are not clear / as per specification.
                </Typography>
              </Card>
            </div>
          )}
        </Stack>
        <div style={iconContainerStyle}>
          <Link to="/bot">
            <div style={{ fontSize: '50px', color: 'blue' }}>
            <FontAwesomeIcon icon={faRobot} />
         </div>
          </Link>
        </div>
      </div>
      <footer style={{ backgroundColor: 'black', padding: '10px', textAlign: 'center', borderTop: '1px solid #ccc',width:'80%',align:'center' }}>
        <a href="https://www.instagram.com/"><FaInstagram size={24} style={{ margin: '0 20px', color: 'white' }} /></a>
        <a href="https://web.whatsapp.com/"><FaWhatsapp size={24} style={{ margin: '0 20px', color: 'white' }} /></a>
        <a href="https://www.facebook.com/"><FaFacebook size={24} style={{ margin: '0 20px', color: 'white' }} /></a>
        <a href="https://twitter.com/"><FaTwitter size={24} style={{ margin: '0 20px', color: 'white' }} /></a>
        <br />
        <h4 style={{ color: 'white', margin: 10 }}>
          © 2023 Online eVisa Processing System
        </h4>
      </footer>
    </div>
  );
}